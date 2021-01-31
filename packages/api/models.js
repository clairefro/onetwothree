const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// super not secure
const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = {
	User,
};
