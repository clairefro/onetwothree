// auth logic heavily inspired by https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/

const jwt = require("jsonwebtoken");

let users = {
	randy: { password: "tegridy" },
	cartman: { password: "respectmahauthoritay" },
};

function login(req, res) {
	const { username, password } = req.body;

	if (!username || !password || users[username].password !== password) {
		return res.status(401).send("Missing or invalid username or password");
	}

	let payload = { username: username };

	let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.ACCESS_TOKEN_LIFE,
	});

	// WARNING! Do no use in production. Not secure.
	// Omit options secure and httpOnly so that auth can be used in localhost
	res.cookie("jwt", accessToken /* { secure: false, httpOnly: false }*/);
	res.send({ username });
}

function logout(req, res) {
	res.clearCookie("jwt");
	res.send({ logout: true });
}

module.exports = {
	login,
	logout,
};
