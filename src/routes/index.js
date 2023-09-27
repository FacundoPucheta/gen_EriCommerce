const { mainController } = require("../controllers");
const router = require("express").Router();

// routes
router.get("/", mainController.getInfo);

module.exports = router;
