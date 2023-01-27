const express = require('express');
const { randomBytes } = require('crypto');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000 || process.env.PORT;

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', async (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;
	posts[id] = {
		id,
		title
	};
	await axios.post('http://localhost:4005/events', {
		type: 'PostCreated',
		data: {
			id,
			title
		}
	});
	res.send(posts[id]);
});

app.post('/events', (req, res) => {
	console.log('Event received', req.body.type);
	res.send({});
});

app.listen(PORT, () => {
	console.log(`Post micro-service is running on port ${PORT}`);
});
