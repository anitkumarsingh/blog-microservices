import React, { useState } from 'react';
import FormInput from '../../components/Forms/FormInput';
import axios from 'axios';
import { COMMENT_BASE_URL } from '../../constant/api';

const CreateComments = ({ postId }) => {
	const [content, setContent] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		await axios.post(`${COMMENT_BASE_URL}/posts/${postId}/comments`, { content });
		setContent('');
	};

	return (
		<>
			<h5>Create Comment</h5>
			<FormInput
				type='text'
				id='create-comment'
				label='Title'
				placeholder='Create comments...'
				value={content}
				onChangehandler={(e) => setContent(e.target.value)}
			/>
			<br />
			<button onClick={submitHandler} className='btn btn-primary'>
				Submit
			</button>
		</>
	);
};

export default CreateComments;
