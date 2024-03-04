const express = require("express");
const router = express.Router()
const controller = require("../../controllers/api/aspirant")
const upload = require("../../middleware/multer")

router.get("/", controller.all);

router.get("/:id", controller.one);

router.get("/search/results", controller.search);

router.post("/create/aspirant", upload.single('image'), controller.create)

module.exports = router;