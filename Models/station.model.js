const mongoose = require('mongoose');


const StationSchema = mongoose.Schema({
    StationName: { type: String, required: true },
    Location: { type: String, required: true },
    Capacity: { type: Number },
    Active: { type: Boolean, default: true }
});

const Station = mongoose.model('Station', StationSchema);

module.exports = Station;
