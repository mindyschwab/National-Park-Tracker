const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
});

// adds username and password fields to the schema along with some methods
// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);