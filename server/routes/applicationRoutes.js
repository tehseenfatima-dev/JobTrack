const express = require("express");

const router = express.Router();


const {
    addApplication,
    getApplications,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationController");


// JWT middleware
const auth = require("../middleware/auth");



// Add application
router.post(
    "/",
    auth,
    addApplication
);


// Get all applications
router.get(
    "/",
    auth,
    getApplications
);


// Update application
router.put(
    "/:id",
    auth,
    updateApplication
);


// Delete application
router.delete(
    "/:id",
    auth,
    deleteApplication
);



module.exports = router;