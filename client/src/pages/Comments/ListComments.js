import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { COMMENT_BASE_URL } from '../../constant/api';

const ListComments = ({ postId }) => {
	const [comment, setComment] = useState([]);

	const fetchComments = async () => {
		const fetchRes = await axios.get(`${COMMENT_BASE_URL}/posts/${postId}/comments`);
		const results = await fetchRes.data;
		setComment(results);
	};
	useEffect(() => {
		fetchComments();
	}, []);
	const renderComments = comment.map(({ commentId, content }) => {
		return <li key={commentId}>{content}</li>;
	});
	return (
		<div>
			{comment.length} Comments
			<ul>{renderComments}</ul>
		</div>
	);
};

export default ListComments;
