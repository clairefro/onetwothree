const isLoggedIn = (req) => {
	return !!req.cookies.jwt;
};
