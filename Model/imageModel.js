const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String}
}, {timestamp: true});

const imageModel = mongoose.model("images", imageSchema);

module.exports = imageModel