import React, { useState } from 'react';
import FormInput from '../../components/Forms/FormInput';

const CreatePosts = () => {
	const [postTxt, setPostTxt] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		setPostTxt('');
	};
	return (
		<>
			<h1>CreatePosts</h1>
			<FormInput
				type='text'
				id='create-post'
				label='Content'
				placeholder='Create post...'
				value={postTxt}
				onChangehandler={(e) => setPostTxt(e.target.value)}
			/>
			<br />
			<button onClick={submitHandler}>Submit</button>
		</>
	);
};

export default CreatePosts;
