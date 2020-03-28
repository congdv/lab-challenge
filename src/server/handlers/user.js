const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        if (!(username && password)) {
            throw {
                message: "Username and password are required",
            };
        }

        const user = await User.findOne({
            username: username.toLowerCase(),
        });
        const passwordCorrect =
            user === null
                ? false
                : await bcrypt.compare(password, user.passwordHash);

        if (!(user && passwordCorrect)) {
            return res.status(401).json({
                error: "invalid username or password",
            });
        }
        const userForToken = {
            username: user.username,
            id: user.id,
        };
        const token = jwt.sign(userForToken, process.env.SECRET);
        res.status(200).send({
            token,
            username: user.username,
            name: user.name,
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const { username, name, password } = req.body;

        if (!(username && name && password)) {
            throw {
                message: "The request body is missing",
            };
        }

        // Validate request body
        if (password.length < 6) {
            throw {
                message: "The password must be at least 6 characters long",
            };
        }
        if (name.length < 1) {
            throw {
                message: "The name cannot be empty",
            };
        }
        if (username.length < 1) {
            throw {
                message: "The userName cannot be empty",
            };
        }

        const existedUser = await User.findOne({ username: username });
        if (existedUser) {
            throw {
                message: "The user name is taken",
            };
        }

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username,
            name,
            passwordHash,
        });

        const savedUser = await user.save();

        res.status(201).json(savedUser.toJSON());
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    register,
};
