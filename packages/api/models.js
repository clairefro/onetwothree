const mongoose = require("mongoose");

// super not secure
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
	User,
};
