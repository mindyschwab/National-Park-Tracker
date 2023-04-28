const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    tipContent: { type: String, required: true },
    date: { type: Date, default: Date.now },
    parkId: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

module.exports = mongoose.model('Tip', tipSchema);