const express = require("express");

const memberController = require("./../controllers/memberController");

const router = express.Router();

const checkAuth = require("./../middleware/check-auth");

router.use(checkAuth);

router.post("/createMember/:cid", memberController.createMember);

module.exports = router;
