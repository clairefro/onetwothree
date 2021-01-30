const { login, logout } = require("./auth");
const { getUsers, addUser } = require("./user");

module.exports = {
	login,
	logout,
	getUsers,
	addUser,
};
