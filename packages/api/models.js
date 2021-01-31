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

const scoreSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		lang: { type: String, required: true },
		score: { type: String, required: true },
		streak: { type: String, required: true },
	},
	{ timestamps: true }
);

const Score = mongoose.model("Score", scoreSchema);

module.exports = {
	User,
	Score,
};
