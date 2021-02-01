const { login, logout, signup } = require("./auth");
const { getUsers } = require("./user");
const { addScore, getScores } = require("./score");

module.exports = {
	login,
	logout,
	getUsers,
	signup,
	addScore,
	getScores,
};
