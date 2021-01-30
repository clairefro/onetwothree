require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 4444;

const { login /*, refresh */ } = require("./authentication");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/login", login);
// app.post("/refrsh", refresh);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
