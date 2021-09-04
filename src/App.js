import React, { useEffect } from 'react';
import './css/style.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';

const App = () => {
	const todoList = [
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
		{
			text: 'this is my first task',
			id: Math.random() * 1000,
			completed: false,
		},
	];

	useEffect(() => {
		// window.addEventListener('click', (e) => {
		// 	if (e.matches('.task--text')) console.log('text');
		// 	if (e.matches('.task--close')) console.log('close');
		// });
	}, []);

	return (
		<div className="container">
			<Header />
			<Input />
			<div className="tasks">
				{todoList.map((task) => (
					<Task key={task.id} id={task.id} text={task.text} completed={task.completed} />
				))}
				<Footer count={todoList.length} />
			</div>
		</div>
	);
};

export default App;
