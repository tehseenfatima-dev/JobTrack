const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(

    {

        user: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,

        },

        fullName: {

            type: String,
            default: "",

        },

        email: {

            type: String,
            default: "",

        },

        phone: {

            type: String,
            default: "",

        },

        address: {

            type: String,
            default: "",

        },

        linkedin: {

            type: String,
            default: "",

        },

        github: {

            type: String,
            default: "",

        },

        portfolio: {

            type: String,
            default: "",

        },

        summary: {

            type: String,
            default: "",

        },

        education: [

            {

                degree: String,

                university: String,

                startYear: String,

                endYear: String,

            }

        ],

        experience: [

            {

                company: String,

                position: String,

                duration: String,

                description: String,

            }

        ],

        skills: [

            String

        ],

        projects: [

            {

                title: String,

                description: String,

                github: String,

                live: String,

            }

        ],

        resumeFile: {

            type: String,
            default: "",

        }

    },

    {

        timestamps: true,

    }

);

module.exports = mongoose.model("Resume", resumeSchema);