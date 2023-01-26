import React, { useState } from 'react';
import FormInput from '../../components/Forms/FormInput';
import axios from 'axios';
import { POST_BASE_URL } from '../../constant/api';

const CreatePosts = () => {
	const [title, setTitle] = useState('');

	const createPost = async () => {
		const req = await axios.post(
			`${POST_BASE_URL}/posts`,
			{ title },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const result = await req.data;
		console.log(result);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		createPost();
		setTitle('');
	};
	return (
		<>
			<h1>CreatePosts</h1>
			<FormInput
				type='text'
				id='create-post'
				label='Content'
				placeholder='Create post...'
				value={title}
				onChangehandler={(e) => setTitle(e.target.value)}
			/>
			<br />
			<button onClick={submitHandler}>Submit</button>
		</>
	);
};

export default CreatePosts;
