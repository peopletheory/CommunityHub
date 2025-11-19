const express = require("express");

const settingController = require("./../controllers/settitngController");

const router = express.Router();

router.get("/save", settingController.saveMyStuff);

router.get("/navigation", settingController.navigationSetting);
router.get("/master", settingController.masterSetting);

router.get("/getNavigation/:cid", settingController.getNavigation);

module.exports = router;