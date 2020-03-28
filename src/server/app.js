const config = require("./utils/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");
const path = require("path");

//Router
const router = require("./router");

// Initialize App
const app = express();

// MongoDB connection
mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.log("Error connection to MongoDB: ", error.message);
    });

app.use(cors());
app.use(express.static(path.join(__dirname, "../../dist/")));
app.use(bodyParser.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// Routers usage
app.get("/api/getUsername", (req, res) => {
    res.send({ username: "congdv" });
});

app.use("/api", router);

// Serve any other file as the distribution index.html
app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
