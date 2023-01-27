const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4001 || process.env.PORT;

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
	res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
	const { content } = req.body;
	const commentId = randomBytes(5).toString('hex');
	const comments = commentsByPostId[req.params.id] || [];
	const id = req.params.id;
	comments.push({ id, commentId, content });
	commentsByPostId[req.params.id] = comments;

	await axios.post('http://localhost:4005/events', {
		type: 'commentCreated',
		data: {
			postId: id,
			commentId,
			content
		}
	});

	res.status(201).send(comments);
});

app.post('/events', (req, res) => {
	console.log('Event received', req.body.type);
	res.send({});
});

app.listen(PORT, () => {
	console.log(`Comment micro-service is running on port ${PORT}`);
});
