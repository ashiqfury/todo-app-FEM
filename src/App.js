import React, { useState } from 'react';
import './css/style.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';
import NoTask from './components/NoTask';

const App = () => {
	// const todoList = [
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// 	{
	// 		text: 'this is my first task',
	// 		id: Math.random() * 1000,
	// 		completed: false,
	// 	},
	// ];

	const [todo, setTodo] = useState([]);

	return (
		<div className="container">
			<Header />
			<Input todo={todo} setTodo={setTodo} />
			<div className="tasks">
				{todo.length ? (
					todo.map((task) => (
						<Task key={task.id} id={task.id} text={task.text} completed={task.completed} />
					))
				) : (
					<NoTask />
				)}
				<Footer count={todo.length} />
			</div>
		</div>
	);
};

export default App;
