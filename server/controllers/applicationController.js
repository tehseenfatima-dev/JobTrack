const Application = require("../models/Application");
const Notification = require("../models/Notification");





// ADD APPLICATION

exports.addApplication = async (req,res)=>{


    try{


        const {

            company,

            position,

            status


        } = req.body;





        const application = await Application.create({


            company,


            position,


            status,


            user:req.user.id


        });







        await Notification.create({


            user:req.user.id,


            message:`New application added for ${company}`,

            type:"Application Added"


        });







        res.status(201).json({


            message:"Application added successfully",


            application


        });




    }catch(error){



        res.status(500).json({

            message:error.message

        });


    }


};











// GET ALL APPLICATIONS

exports.getApplications = async(req,res)=>{


    try{


        const applications = await Application.find({

            user:req.user.id

        })

        .sort({

            createdAt:-1

        });




        res.json(applications);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};











// UPDATE APPLICATION

exports.updateApplication = async(req,res)=>{


    try{


        const oldApplication = await Application.findById(

            req.params.id

        );




        const application = await Application.findByIdAndUpdate(


            req.params.id,


            req.body,


            {

                new:true

            }


        );







        if(req.body.status && req.body.status !== oldApplication.status){



            await Notification.create({


                user:req.user.id,


                message:`${oldApplication.company} status changed to ${req.body.status}`,

                type:"Status Updated"


            });


        }







        res.json({


            message:"Application updated",


            application


        });




    }catch(error){



        res.status(500).json({

            message:error.message

        });


    }


};











// DELETE APPLICATION

exports.deleteApplication = async(req,res)=>{


    try{


        await Application.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Application deleted"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};