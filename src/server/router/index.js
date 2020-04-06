const router = require("express").Router();
const userRoutes = require("./user");
const labRoutes = require("./labs");

router.use("/user", userRoutes);
router.use("/labs", labRoutes);

module.exports = router;
