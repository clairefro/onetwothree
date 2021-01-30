require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const { verify } = require("./utils/verify");

const port = process.env.PORT || 4444;

const { login, logout } = require("./routes/auth");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/login", login);
app.post("/logout", logout);
app.post("/am-i-in", verify, (req, res) => {
	res.send("You're in");
});

// app.get("/leaderboard", routeHandler);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
