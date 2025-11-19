const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const cors = require('cors');

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const settingRoutes = require("./routes/settingRoutes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

// require("dotenv").config();

app.use(cors({
  origin: 'http://localhost:3000' // Allow requests only from this origin
}));

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/settings", settingRoutes);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")

    next();
})


app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);

    throw error;
});

app.use((error, req, res, next) => {
    if(req.file){
        fs.unlink(req.file.path, (err) => {
            console.log(err);
        })
    }
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unkown error occurred"});
});

mongoose.connect(`mongodb+srv://jhalaby:nadroJnadroJ99!emich@community.arykfne.mongodb.net/`).then(() => {
    app.listen(3051);
}).catch(err => {
    console.log(err);
});
