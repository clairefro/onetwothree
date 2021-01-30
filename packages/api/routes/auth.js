// auth logic heavily inspired by https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/

const jwt = require("jsonwebtoken");

let users = {
	randy: { password: "tegridy" },
	cartman: { password: "respectmahauthoritay" },
};

function login(req, res) {
	const { username, password } = req.body;

	if (!username || !password || users[username].password !== password) {
		console.log("entered 401");
		return res.status(401).send();
	}

	//use the payload to store information about the user such as username, user role, etc.

	let payload = { username: username };

	//create the access token with the shorter lifespan
	let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.ACCESS_TOKEN_LIFE,
	});

	//store the refresh token in the user array
	users[username].refreshToken = refreshToken;

	//send the access token to the client inside a cookie
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
