const router = require("express").Router();
const userHandler = require("../handlers/user");

//Post
router.post("/login", userHandler.login);
router.post("/register", userHandler.register);

module.exports = router;
