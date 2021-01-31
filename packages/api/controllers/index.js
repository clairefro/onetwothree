const { login, logout, signup } = require("./auth");
const { getUsers } = require("./user");

module.exports = {
	login,
	logout,
	getUsers,
	signup,
};
