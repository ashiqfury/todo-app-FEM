import React from 'react';

const Input = () => {
	return (
		<div className="input">
			<input type="checkbox" className="checkbox input--checkbox" id="input--checkbox" />
			<label htmlFor="input--checkbox" className="input--label checkbox-label" />
			<input
				type="text"
				className="text input--text"
				placeholder="Create a new todo..."
				spellCheck="false"
			/>
		</div>
	);
};

export default Input;
