import React from 'react';

const FormInput = ({ onChangehandler, ...rest }) => {
  const { id, label } = rest;
	return (
		<>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<input onChange={onChangehandler} {...rest} className='form-control' />
		</>
	);
};

export default FormInput;
