const Notification = require("../models/Notification");





// GET USER NOTIFICATIONS

exports.getNotifications = async(req,res)=>{


    try{


        const notifications = await Notification.find({

            user:req.user.id

        })

        .sort({

            createdAt:-1

        });



        res.json(notifications);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// MARK AS READ

exports.markAsRead = async(req,res)=>{


    try{


        const notification = await Notification.findByIdAndUpdate(

            req.params.id,

            {

                isRead:true

            },

            {

                new:true

            }

        );



        res.json({

            message:"Notification marked as read",

            notification

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// DELETE NOTIFICATION

exports.deleteNotification = async(req,res)=>{


    try{


        await Notification.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Notification deleted"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};