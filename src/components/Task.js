import React, { useState } from 'react';
import close from '../images/icon-cross.svg';

const Task = ({ id, text, todo, setTodo, checked }) => {
	console.log('param todo', todo);
	const [thisTask, setThisTask] = useState({}); // changed object
	const completedHandler = () => {
		let index,
			toggler = !checked;

		let taskFound;
		todo.forEach((task, i) => {
			if (task.id === id) {
				index = i;
				taskFound = task;
			}
		});
		setThisTask(taskFound);
		// const oldTask = thisTask; // this task object unchanged - original
		setThisTask((prevState) => ({
			...prevState,
			completed: toggler,
		}));

		toggler = false; //testing
		const dupTodo = todo;
		console.log('todo original 1', todo);
		console.log('todo modified 1', dupTodo);
		console.log('this task', thisTask);
		dupTodo[index] = thisTask;
		setTodo(dupTodo);
		console.log('todo original 2', todo);
		console.log('todo modified 2', dupTodo);
	};

	const deleteHandler = () => {
		const filteredTodo = todo.filter((task) => task.id !== id);
		setTodo(filteredTodo);
	};

	return (
		<div className="task">
			<input
				type="checkbox"
				checked={checked}
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
