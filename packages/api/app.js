require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { verify } = require("./utils/verify");
const { login, logout, getUsers, signup } = require("./controllers");

const port = process.env.PORT || 4444;

app.use(
	cors({
		origin: "http://localhost:8080",
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/login", login);
app.post("/logout", logout);

app.get("/users", getUsers);
app.post("/users", signup);

app.post("/am-i-in", verify, (req, res) => {
	res.send("You're in");
});

// app.get("/leaderboard", routeHandler);

// connect to db and start server
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB Connected...");
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`);
		});
	})
	.catch((e) => console.log(e));
