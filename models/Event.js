const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    event_name: {
        type: String,
    },
    date: {
        type: String,
    },
    location: {
        type: String,
    },
    vasos: {
        type: Number,
    },
    carne: {
        type: Number,
    }
});
module.exports = mongoose.model('Event', eventSchema);