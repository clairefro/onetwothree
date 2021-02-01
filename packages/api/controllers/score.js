const Score = require("../models").Score;

async function addScore(req, res) {
	const { userId, score, streak, lang } = req.body;
	try {
		const newScore = await Score.create({ user: userId, score, streak, lang });
		res.send(newScore);
	} catch (e) {
		res.status(500).send({ message: "Internal Error: failed to save score sorryyy", error: e });
	}
}

function sortByHighest(scores) {
	console.log(scores.sort((a, b) => b.score - a.score));
	return scores.sort((a, b) => b.score - a.score);
}

async function getScores(_req, res) {
	try {
		const scores = await Score.find().populate("user", "username");
		console.log({ scores });
		// sort into langs
		scoresByLang = {};

		scores.forEach((s) => {
			if (!scoresByLang[s.lang]) {
				scoresByLang[s.lang] = [];
			}
			scoresByLang[s.lang].push(s);
		});

		scoresByLangSorted = {};

		Object.entries(scoresByLang).forEach(([key, vals]) => {
			scoresByLangSorted[key] = sortByHighest(vals);
		});

		res.send(scoresByLang);
	} catch (e) {
		res.status(500).send({ message: "Internal Error: failed to fetch scores", error: e });
	}
}

module.exports = {
	addScore,
	getScores,
};
