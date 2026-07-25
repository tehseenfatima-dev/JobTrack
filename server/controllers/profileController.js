const User = require("../models/User");
const bcrypt = require("bcryptjs");



// GET PROFILE

exports.getProfile = async(req,res)=>{


    try{


        const user = await User.findById(
            req.user.id
        ).select("-password");


        res.json(user);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};






// UPDATE PROFILE

exports.updateProfile = async(req,res)=>{


    try{


        const {
            name,
            email
        } = req.body;



        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                name,
                email
            },

            {
                new:true
            }

        ).select("-password");




        res.json({

            message:"Profile updated",

            user

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// CHANGE PASSWORD

exports.changePassword = async(req,res)=>{


    try{


        const {
            oldPassword,
            newPassword
        } = req.body;



        const user = await User.findById(
            req.user.id
        );



        const match = await bcrypt.compare(

            oldPassword,

            user.password

        );



        if(!match){

            return res.status(400).json({

                message:"Old password incorrect"

            });

        }




        const hashedPassword = await bcrypt.hash(

            newPassword,

            10

        );



        user.password = hashedPassword;


        await user.save();




        res.json({

            message:"Password changed successfully"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};