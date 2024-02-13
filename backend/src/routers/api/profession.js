const express = require("express");
const router = express.Router()
const controller = require("../../controllers/api/profession")

router.get("/", controller.all);

router.get("/:id", controller.one)

module.exports = router;