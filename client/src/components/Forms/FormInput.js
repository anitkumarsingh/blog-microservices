import React from 'react';

const FormInput = ({ onChangehandler, ...rest }) => {
	return (
		<>
			<label htmlFor={rest.id} />
			<input onChange={onChangehandler} {...rest} />
		</>
	);
};

export default FormInput;
