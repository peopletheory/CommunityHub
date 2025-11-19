// backend/server.js

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

// Allow requests from frontend subdomain
const allowedOrigin = process.env.CLIENT_ORIGIN || "http://app.localhost";
app.use(cors({origin: allowedOrigin, credentials: true}));

// simple test route
app.get("/api/ping", (req, res) => res.json({ ok: true, from: "api.localhost"}));

// Example Mongoose model
const CatSchema = new mongoose.Schema({ name: String });
const Cat = mongoose.model("Cat", CatSchema);

// Example routes
app.post("/api/cats", async (req, res) => {
    const cat = await Cat.create({name: req.body.name});
    res.json(cat);
});

app.get("/api/cats", async (req, res) => {
    res.json(await Cat.find());
});

// start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://jhalaby:nadroJnadroJ99!emich@community.arykfne.mongodb.net/', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
}).catch(err => {
    console.log("Mongo connection error", err);
});