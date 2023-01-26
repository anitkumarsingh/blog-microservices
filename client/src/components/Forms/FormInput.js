import React from 'react';

const FormInput = ({ onChangehandler, ...rest }) => {
  const { id, label } = rest;
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input onChange={onChangehandler} {...rest} />
		</>
	);
};

export default FormInput;
