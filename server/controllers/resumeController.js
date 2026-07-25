const Resume = require("../models/Resume");



// Get Resume

const getResume = async (req, res) => {

    try {

        let resume = await Resume.findOne({

            user: req.user.id

        });

        if (!resume) {

            resume = await Resume.create({

                user: req.user.id

            });

        }

        res.status(200).json(resume);

    }

    catch (error) {

        res.status(500).json({

            message: "Failed to fetch resume"

        });

    }

};




// Save / Update Resume

const saveResume = async (req, res) => {

    try {

        const {

            fullName,

            email,

            phone,

            address,

            linkedin,

            github,

            portfolio,

            summary,

            education,

            experience,

            skills,

            projects,

        } = req.body;



        let resume = await Resume.findOne({

            user: req.user.id

        });



        if (!resume) {

            resume = new Resume({

                user: req.user.id

            });

        }


        const parseJsonField = (value) => {
            if (typeof value === "string") {
                const trimmed = value.trim();
                if (!trimmed) return [];
                try {
                    return JSON.parse(trimmed);
                } catch {
                    return trimmed
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean);
                }
            }
            return value;
        };


        resume.fullName = fullName;
        resume.email = email;
        resume.phone = phone;
        resume.address = address;
        resume.linkedin = linkedin;
        resume.github = github;
        resume.portfolio = portfolio;
        resume.summary = summary;
        resume.education = parseJsonField(education);
        resume.experience = parseJsonField(experience);
        resume.skills = parseJsonField(skills);
        resume.projects = parseJsonField(projects);



        if (req.file) {

            resume.resumeFile = req.file.filename;

        }



        await resume.save();



        res.status(200).json({

            message: "Resume saved successfully",

            resume,

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Failed to save resume"

        });

    }

};




// Delete Resume

const deleteResume = async (req, res) => {

    try {

        await Resume.findOneAndDelete({

            user: req.user.id

        });

        res.status(200).json({

            message: "Resume deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Failed to delete resume"

        });

    }

};



module.exports = {

    getResume,

    saveResume,

    deleteResume,

};