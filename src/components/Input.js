import React from 'react';

const Input = ({ value, setValue, keyHandler, isChecked, setIsChecked }) => {
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
			/>
		</div>
	);
};

export default Input;
