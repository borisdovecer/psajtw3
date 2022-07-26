const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content_text: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    createdOn: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('News', NewsSchema);
