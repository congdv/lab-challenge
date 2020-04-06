const router = require("express").Router();
const labHandler = require("../handlers/labs");

// Get all labs
router.get("/", labHandler.getAllLabs);

module.exports = router;
