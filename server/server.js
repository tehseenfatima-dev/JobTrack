const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();



const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const profileRoutes = require("./routes/profileRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const app = express();



// Middleware

app.use(
    cors({
        origin: "job-track-fi59-1duo4h6zp-team-pro12.vercel.app",
        credentials: true
    })
);

app.use(express.json());

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);


// Routes

app.use("/api/auth", authRoutes);

app.use("/api/applications", applicationRoutes);

app.use(
    "/api/dashboard",
    dashboardRoutes
);
app.use(
    "/api/profile",
    profileRoutes
);
app.use(
    "/api/notifications",
    notificationRoutes
);
app.use("/api/resume", resumeRoutes);
// Test Route

app.get("/", (req, res) => {

    res.send("JobTrack API Running");

});




// MongoDB Connection

mongoose.connect(process.env.MONGO_URI, {
    family: 4
})

.then(() => {

    console.log("MongoDB Connected");


    const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );

    });


})

.catch((error) => {

    console.log(error);

});