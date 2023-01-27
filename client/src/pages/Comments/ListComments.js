import React from 'react';

const ListComments = ({ comments }) => {
	const renderComments = comments.map(({ commentId, content }) => {
		return <li key={commentId}>{content}</li>;
	});
	return (
		<div>
			{comments.length} Comments
			<ul>{renderComments}</ul>
		</div>
	);
};

export default ListComments;
