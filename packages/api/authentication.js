// auth logic heavily inspired by https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/

const jwt = require("jsonwebtoken");

let users = {
	randy: { password: "tegridy" },
	cartman: { password: "respectmahauthoritay" },
};

exports.login = function (req, res) {
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

	console.log({ accessToken });
	//create the refresh token with the longer lifespan
	let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.REFRESH_TOKEN_LIFE,
	});
	console.log({ refreshToken });

	//store the refresh token in the user array
	users[username].refreshToken = refreshToken;

	//send the access token to the client inside a cookie
	res.cookie("jwt", accessToken, { secure: true, httpOnly: false });
	res.send({ username });
};
