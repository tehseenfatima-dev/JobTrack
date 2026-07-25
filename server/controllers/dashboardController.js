const Application = require("../models/Application");



// GET DASHBOARD STATS

exports.getDashboardStats = async (req, res) => {


    try {


        const userId = req.user.id;



        const total = await Application.countDocuments({

            user: userId

        });



        const applied = await Application.countDocuments({

            user: userId,

            status: "Applied"

        });



        const interview = await Application.countDocuments({

            user: userId,

            status: "Interview"

        });



        const rejected = await Application.countDocuments({

            user: userId,

            status: "Rejected"

        });



        const offer = await Application.countDocuments({

            user: userId,

            status: "Offer"

        });





        const recentApplications = await Application.find({

            user: userId

        })

        .sort({

            createdAt: -1

        })

        .limit(5);





        res.json({

            total,

            applied,

            interview,

            rejected,

            offer,

            recentApplications

        });



    } catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


};