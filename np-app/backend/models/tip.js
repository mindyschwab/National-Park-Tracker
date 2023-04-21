const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    tipContent: { type: String, required: true },
    date: { type: Date, default: Date.now },
    nationalParkId: { type: String, required: true }
});

module.exports = mongoose.model('Tip', tipSchema);