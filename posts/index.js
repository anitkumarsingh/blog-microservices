const express = require('express');
const { randomBytes } = require('crypto');
const app = express();

app.use(express.json());

const PORT = 4000 || process.env.PORT;

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;
	posts[id] = {
		id,
		title
	};
	res.send(posts[id]);
});

app.listen(PORT, () => {
	console.log(`Post micro-service is running on port ${PORT}`);
});
