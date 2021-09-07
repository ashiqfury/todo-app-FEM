import React, { useState } from 'react';
import './css/style.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';
import NoTask from './components/NoTask';

const App = () => {
	const [todo, setTodo] = useState([]); // List of all todos
	const [value, setValue] = useState(''); // input field values
	const [isChecked, setIsChecked] = useState(false); // input field checkbox
	const [filters, setFilters] = useState('all');

	const keyHandler = (e) => {
		// Input field submit handler
		if (e.key === 'Enter') {
			setTodo([...todo, { id: Math.random() * 10000, text: value, completed: false }]);
			setValue('');

			const filtArr = todo.filter((task) => task.completed === true);
			console.log(filtArr);
			console.log(filters);
		}
	};

	return (
		<div className="container">
			<Header />
			<Input
				value={value}
				setValue={setValue}
				keyHandler={keyHandler}
				isChecked={isChecked}
				setIsChecked={setIsChecked}
			/>
			<div className="tasks">
				y
				{filters === 'all' && // All task filter
					todo.map((task) => (
						<Task
							id={task.id}
							text={task.text}
							checked={task.completed}
							todo={todo}
							setTodo={setTodo}
						/>
					))}
				{filters === 'completed' && // Completed task filter
					todo
						.filter((task) => task.completed === true)
						.map((task) => (
							<Task
								id={task.id}
								text={task.text}
								checked={task.completed}
								todo={todo}
								setTodo={setTodo}
							/>
						))}
				{filters === 'active' && // Active task filter
					todo
						.filter((task) => task.completed === false)
						.map((task) => (
							<Task
								id={task.id}
								text={task.text}
								checked={task.completed}
								todo={todo}
								setTodo={setTodo}
							/>
						))}
				{!todo.length && <NoTask />}
				<Footer count={todo.length} setFilters={setFilters} setTodo={setTodo} />
			</div>
		</div>
	);
};

export default App;
