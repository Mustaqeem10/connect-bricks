const express = require("express");
const { getUserData } = require("../controller/user-controller");
const router = express.Router();

router.get("/:id", getUserData)

module.exports = router;
