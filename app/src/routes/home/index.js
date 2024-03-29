"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.outPut.home);
router.get("/login", ctrl.outPut.login);
router.get("/register", ctrl.outPut.register);
router.post("/login", ctrl.process.login);

module.exports = router;