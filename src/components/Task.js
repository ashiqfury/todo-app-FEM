import React, { useState } from 'react';
import close from '../images/icon-cross.svg';

const Task = ({ id, text, todo, setTodo }) => {
	const [completed, setCompleted] = useState(false);

	const completedHandler = () => {
		setCompleted(!completed);
		// const thisTask = todo.filter((task) => task.id === id);
	};

	const deleteHandler = () => {
		const filteredTodo = todo.filter((task) => task.id !== id);
		setTodo(filteredTodo);
	};

	return (
		<div className="task">
			<input
				type="checkbox"
				checked={completed}
				onChange={completedHandler}
				className="checkbox task--checkbox"
				id={id}
			/>
			<label htmlFor={id} className="task--label checkbox-label" />
			<p className="task--text">{text}</p>
			<img src={close} onClick={deleteHandler} alt="close" className="task--close" />
		</div>
	);
};

export default Task;
