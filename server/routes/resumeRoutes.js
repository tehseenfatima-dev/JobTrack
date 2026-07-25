const express = require("express");

const router = express.Router();

const multer = require("multer");
const path = require("path");

const {
    getResume,
    saveResume,
    deleteResume,
} = require("../controllers/resumeController");

const authMiddleware = require("../middleware/authMiddleware");



// Multer Storage

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/resumes");

    },

    filename: (req, file, cb) => {

        cb(

            null,

            Date.now() + path.extname(file.originalname)

        );

    },

});



const upload = multer({

    storage,

    limits: {

        fileSize: 5 * 1024 * 1024,

    },

    fileFilter: (req, file, cb) => {

        const allowed = [

            "application/pdf",

            "application/msword",

            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        ];

        if (allowed.includes(file.mimetype)) {

            cb(null, true);

        } else {

            cb(new Error("Only PDF and Word files are allowed"));

        }

    },

});



// Routes

router.get(

    "/",

    authMiddleware,

    getResume

);

router.post(

    "/",

    authMiddleware,

    upload.single("resume"),

    saveResume

);

router.delete(

    "/",

    authMiddleware,

    deleteResume

);

module.exports = router;