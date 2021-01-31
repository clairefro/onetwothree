const User = require("../models").User;
const { publicUser } = require("../utils/publicUser");

async function getUsers(req, res) {
	try {
		const users = await User.find();
		res.send(users.map(publicUser));
	} catch (e) {
		res.status(500).send({ message: "Internal Error: failed to fetch users from db", error: e });
	}
}

module.exports = {
	getUsers,
};
