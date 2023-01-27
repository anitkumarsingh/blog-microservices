const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4004 || process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/events', (req, res) => {
	const { type, data } = req.body;
	if (type === 'PostCreated') {
		const { id, title } = data;
		posts[id] = { id, title, comments: [] };
	}
	if (type === 'CommentCreated') {
		const { postId, content, commentId } = data;
		const post = posts[postId];
		post.comments.push({ postId, commentId, content });
		res.send({});
	}
});

app.listen(PORT, () => {
	console.log(`Query server is running on port ${PORT}`);
});
