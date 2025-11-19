const HttpError = require("../models/http-error");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

const User = require("./../models/user");

const test = async (req, res, next) => {

    var hashedPassword = await bcrypt.hash("jordan123", 12);
    const jordan = {
        firstName: "Jordan",
        lastName: "Halaby",
        email: "jordan@peopletheory.co",
        phoneNumber: "2489127636",
        password: hashedPassword,
        role: "admin",
        client: "68ffc684221306cfdbbaf8c1"
    };

    const createdUser = new User(jordan);

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
        'Signing up failed, please try again later.',
        500
        );
        return next(error);
    }
    res.json(jordan);
}

const login = async (req, res, next) => {
    const { email, password, clientId } = req.body;

    if(!email || email == ""){
        const error = new HttpError("Please provide an email", 500);
        return next(error);
    }
    if(!password || password == ""){
        const error = new HttpError("Please provide a password", 500);
        return next(error);
    }

    let existingUser;

    try{
        existingUser = await User.findOne({email: email});
    } catch(err){
        const error = new HttpError("Login in failed, please try again later", 500);
        return next(error);
    }

    if(!existingUser){
        const error = new HttpError("User not found", 500);
        return next(error);
    }

    var userClient = existingUser.client;

    if(!userClient){
        const error = new HttpError("Could not resolve client", 500);
        return next(error);
    }

    var isValidClient = false;

    try{
        isValidClient = (userClient == clientId);
    } catch(err){
        const error = new HttpError("Client does not match up", 500);
        return next(error);
    }

    if(!isValidClient){
        const error = new HttpError("Could not verify client", 500);
        return next(error);
    }


    let isValidPassword = false;

    try{
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch(err){
        const error = new HttpError("Could not log you in, invalid credentials", 500);
        return next(error);
    }

    if(!isValidPassword){
        const error = new HttpError("Could not log you in, invalid credentials", 500);
        return next(error);
    }

    let token;

    try{
        token = jwt.sign({userId: existingUser.discriminator, email: existingUser.email}, process.env.JWT_KEY, {expiresIn: '12h'});
    } catch(err){
        const error = new HttpError("Logging in failed, please try again later", 500);
        return next(error);
    }

    res.json({userId: existingUser.id, email: existingUser.email, token: token});
}

exports.test = test;
exports.login = login;