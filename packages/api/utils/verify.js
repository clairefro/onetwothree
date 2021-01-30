const jwt = require("jsonwebtoken");

exports.verify = function (req, res, next) {
	const { jwt: accessToken } = req.cookies;

	//if there is no token stored in cookies, the request is unauthorized
	if (!accessToken) {
		return res.status(403).send("You are not authorized to do that!");
	}

	try {
		//use the jwt.verify method to verify the access token
		//throws an error if the token has expired or has a invalid signature
		jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
		next();
	} catch (e) {
		//if an error occured return request unauthorized error
		return res.status(401).send("Something went wrong :(");
	}
};
