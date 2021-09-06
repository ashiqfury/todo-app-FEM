import React, { useState } from 'react';
import close from '../images/icon-cross.svg';

const Task = ({ id, text, todo, setTodo, checked }) => {
	console.log('param todo', todo);
	// const [thisTask, setThisTask] = useState({ id, text, completed: checked }); // changed object
	let toggler = checked;
	let index;
	const completedHandler = () => {
		toggler = !checked;

		// let taskFound;
		todo.forEach((task, i) => {
			console.log(task);
			if (task.id === id) {
				index = i;
				// taskFound = task;
			}
		});
		// setThisTask(taskFound); // contain old task.
		// method 1
		// setThisTask((prevState) => ({
		// 	...prevState,
		// 	completed: toggler,
		// }));
		// method 2
		console.log('toggler after toggled', toggler);
		// console.log('thistask before setted', thisTask);
		// setThisTask({ ...thisTask, id, text, completed: toggler });
		// console.log('thistask after setted', thisTask);

		const dupTodo = [...todo];
		console.log('todo original', todo);
		console.log('duptodo original', dupTodo);
		console.log('index', index);
		// dupTodo[index] = thisTask;
		dupTodo[index] = { id, text, completed: toggler };
		setTodo(dupTodo);
		console.log('todo modified', todo);
		console.log('duptodo modified', dupTodo);
	};

	const deleteHandler = () => {
		const filteredTodo = todo.filter((task) => task.id !== id);
		setTodo(filteredTodo);
	};

	return (
		<div className="task">
			<input
				type="checkbox"
				checked={toggler}
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
