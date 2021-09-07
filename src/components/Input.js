import React from 'react';

const Input = ({ value, setValue, todo, setTodo, isChecked, setIsChecked }) => {
	const keyHandler = (e) => {
		// Input field submit handler
		if (e.key === 'Enter') {
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
