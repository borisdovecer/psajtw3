const mongoose = require('mongoose');

const PsychedelicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subname: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        required: true
    },
    molecule: {
        type: String,
        required: true
    },
    doses: {
        type: Object,
        required: false
    },
    slug: {
        type: String,
        required: false
    },
    createdOn: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Psychedelics', PsychedelicsSchema);
