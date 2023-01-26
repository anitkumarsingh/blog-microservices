import React, { useState } from 'react';
import FormInput from '../../components/Forms/FormInput';

const CreateComments = () => {
	const [commentTxt, setCommentTxt] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		setCommentTxt('');
	};

	return (
		<>
			<h1>Create Comments</h1>
			<FormInput
				type='text'
				id='create-comment'
				label='Title'
				placeholder='Create comments...'
				value={commentTxt}
				onChangehandler={(e) => setCommentTxt(e.target.value)}
			/>
			<br />
			<button onClick={submitHandler}>Submit</button>
		</>
	);
};

export default CreateComments;
