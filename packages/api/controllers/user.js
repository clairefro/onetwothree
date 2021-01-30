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

async function addUser(req, res) {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400).send("Must provide username and password");
	}

	const userDraft = new User({ username, password });

	try {
		const { username } = await userDraft.save();
		res.send({ username });
	} catch (e) {
		console.error(e);
		res.status(500).send({ message: "Internal Error: failed to save user to db", error: e });
	}
}

module.exports = {
	getUsers,
	addUser,
};
