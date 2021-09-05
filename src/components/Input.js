import React, { useState } from 'react';

const Input = ({ todo, setTodo }) => {
	const [value, setValue] = useState('');

	const keyHandler = (e) => {
		if (e.key === 'Enter') {
			setTodo([...todo, { id: Math.random() * 1000, text: value, completed: false }]);
			setValue('');
		}
	};

	return (
		<div className="input">
			<input type="checkbox" className="checkbox input--checkbox" id="input--checkbox" />
			<label htmlFor="input--checkbox" className="input--label checkbox-label" />
			<input
				type="text"
				className="text input--text"
				placeholder="Create a new todo..."
				spellCheck="false"
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={keyHandler}
				value={value}
			/>
		</div>
	);
};

export default Input;
