const express = require("express");
const { createNewUser, getUserData, login } = require("../controller/auth-controller");
const router = express.Router();

router.post("/signup", createNewUser)
router.post("/login", login)

module.exports = router;
