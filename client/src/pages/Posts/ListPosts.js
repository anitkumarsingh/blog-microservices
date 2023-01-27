import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QUERY_BASE_URL } from '../../constant/api';
import { CreateComments, ListComments } from '../Comments';

const ListPosts = () => {
	const [item, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const Fetch = async () => {
		setIsLoading(true);
		const fetchPost = await axios.get(`${QUERY_BASE_URL}/posts`);
		const result = await fetchPost.data;
		setItems(result);
		setIsLoading(false);
	};

	useEffect(() => {
		Fetch();
	}, []);

	const renderedPosts = Object.values(item).map(({ id, title, comments }) => {
		return (
			<div
				className='card'
				key={id}
				style={{ width: '40%', marginBottom: '20px', color: 'black' }}>
				<div className='card-body'>
					<h4>{title}</h4>
					<ListComments comments={comments} />
					<CreateComments postId={id} />
				</div>
			</div>
		);
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<h1>List Posts</h1>
			<br />
			<div className='d-flex flex-wrap flex-row justify-content-between'>
				{renderedPosts}
			</div>
		</>
	);
};

export default ListPosts;
