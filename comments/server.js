const express = require('express');
const { randomBytes } = require('crypto');

const app = express();
app.use(express.json());

const PORT = 5000 || process.env.PORT;

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
	res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
	const { content } = req.body;
	const commentId = randomBytes(5).toString('hex');
	const comments = commentsByPostId[req.params.id] || [];
	comments.push({ id, commentId, content });
	commentsByPostId[req.params.id] = comments;
	res.status(201).send(comments);
});

app.listen(PORT, () => {
	console.log(`Comment micro-service is running on port ${PORT}`);
});
