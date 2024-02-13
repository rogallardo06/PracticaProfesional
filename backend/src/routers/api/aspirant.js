const express = require("express");
const router = express.Router()
const controller = require("../../controllers/api/aspirant")

router.get("/", controller.all);

router.get("/:id", controller.one)

router.get("/search/results", controller.search);

module.exports = router;