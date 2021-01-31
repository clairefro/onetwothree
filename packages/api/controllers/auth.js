// auth logic heavily inspired by https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/

const jwt = require("jsonwebtoken");
const { User } = require("../models");

const generateAccessToken = (payload) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.ACCESS_TOKEN_LIFE,
	});
};

async function login(req, res) {
	const { username, password } = req.body;

	let user = null;

	try {
		user = await User.findOne({ username });
	} catch (e) {
		return res.status(500).send({ message: "Uh oh, something went wrong in the backend...", error: e });
	}
	if (!username || !password || !user || user.password !== password) {
		return res.status(401).send("Missing or invalid username or password");
	}

	const payload = { username };

	const accessToken = generateAccessToken(payload);

	// WARNING! Do no use in production. Not secure.
	// Omit options secure and httpOnly so that auth can be used in localhost
	res.cookie("jwt", accessToken /* { secure: false, httpOnly: false }*/);
	res.send({ username });
}

function logout(_req, res) {
	res.clearCookie("jwt");
	res.send({ logout: true });
}

async function signup(req, res) {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).send("Missing or username or password");
	}

	let user = null;

	try {
		user = await User.create({ username, password });
	} catch (e) {
		return res.status(500).send({ message: "Uh oh, something went wrong in the backend...", error: e });
	}

	const payload = { username: user.username };

	const accessToken = generateAccessToken(payload);

	// WARNING! Do no use in production. Not secure.
	res.cookie("jwt", accessToken);
	res.send({ username });
}

module.exports = {
	login,
	logout,
	signup,
};
