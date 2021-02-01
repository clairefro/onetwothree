const { login, logout, signup, me } = require("./auth");
const { getUsers } = require("./user");
const { addScore, getScores } = require("./score");

module.exports = {
	login,
	logout,
	getUsers,
	signup,
	addScore,
	getScores,
	me,
};
