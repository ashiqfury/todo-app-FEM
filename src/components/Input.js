import React, { useState } from 'react';

const Input = ({ todo, setTodo, isChecked, setIsChecked }) => {
	const [value, setValue] = useState(''); // input field values
	const keyHandler = (e) => {
		if (e.keyCode === 13) {
			if (value.trim() === '') return setValue('');
			setTodo([...todo, { id: Math.random() * 10000, text: value, completed: false }]);
			setValue('');
		}
	};

	return (
		<div className="input">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
				className="checkbox input--checkbox"
				id="input--checkbox"
			/>
			<label htmlFor="input--checkbox" className="input--label checkbox-label" />
			<input
				type="text"
				className="text input--text"
				placeholder="Create a new todo..."
				spellCheck="false"
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={keyHandler}
				value={value}
				autoFocus
			/>
		</div>
	);
};

export default Input;

/***************************** Ashiq Fury : --> https://github.com/ashiqfury ****************************************/
