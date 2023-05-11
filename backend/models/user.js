const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, minlength: 8 },
// });

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
});

// add passport plug in for user schema (adds support for username and password)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);