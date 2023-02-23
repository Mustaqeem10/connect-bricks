const express = require("express");
const createNewUser = require("../controller/auth-controller");
const router = express.Router();

router.post("/signup", createNewUser)

module.exports = router;
