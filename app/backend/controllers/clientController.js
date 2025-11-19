
const HttpError = require("../models/http-error");
const crypto = require("crypto");
const mongoose = require("mongoose");

const { validationResult} = require("express-validator");

const Client = require("./../models/client");

const test = async (req, res, next) => {
    res.json('hello world');
}

const addClient = async(req, res, next) => {
    const payload = req.body;

    const createdClient = new Client(payload);
    console.log(createdClient);

    // toDO: make sure subdomain is unique
    try {
        await createdClient.save();
    } catch (err) {
        console.log(err);
        const error = new HttpError( 'Client Creation failed', 500);
        return next(error);
    }
    res.json("created client");
}
const getClientID = async(req, res, next) => {
    const {domain} = req.body;

    const resp = await Client.find({clientDomain: domain});

    const clientID = resp[0].id;
    const clientName = resp[0].clientName;

    console.log(clientID);

    res.json({clientID, clientName});
}

exports.getClientID = getClientID;
exports.test = test;
exports.addClient = addClient;