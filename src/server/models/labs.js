const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const labSchema = mongoose.Schema({
    organization: String,
    title: String,
    description: String,
    category: String,
    privacy: String,
    imageName: String,
    latitude: Number,
    longitude: Number,
    address: String,
    city: String,
    country: String,
    status: Boolean,
});

labSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

labSchema.plugin(uniqueValidator);

const Labs = mongoose.model("Lab", labSchema);

module.exports = Labs;
