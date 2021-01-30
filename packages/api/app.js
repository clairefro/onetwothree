require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const { verify } = require("./utils/verify");

const port = process.env.PORT || 4444;

const { login /*, refresh */ } = require("./routes/auth");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/login", login);
app.post("/logged-in-world", verify, (req, res) => {
	console.log({ reqCookies: req.cookies });
	res.send("You're in");
});
// app.post("/refrsh", refresh);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
