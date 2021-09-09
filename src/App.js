import React, { useState, useEffect } from 'react';
import './css/style.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';
import NoTask from './components/NoTask';
import Drag from './components/Drag';

const App = () => {
	const [todo, setTodo] = useState([]); // List of all todos
	const [value, setValue] = useState(''); // input field values
	const [isChecked, setIsChecked] = useState(false); // input field checkbox
	const [filters, setFilters] = useState('all');
	const [filteredTodo, setFilteredTodo] = useState([]);

	useEffect(() => {
		const array = todo.map((task) => {
			return {
				id: task.id,
				text: task.text,
				completed: isChecked,
			};
		});
		setTodo(array);
		console.log(todo);
	}, [isChecked]);

	useEffect(() => {
		filters === 'all' && setFilteredTodo(todo.map((task) => task));
		filters === 'active' && setFilteredTodo(todo.filter((task) => task.completed === false));
		filters === 'completed' && setFilteredTodo(todo.filter((task) => task.completed === true));
	}, [filters, todo]);

	return (
		<div className="container">
			<Header />
			<Input
				value={value}
				setValue={setValue}
				isChecked={isChecked}
				setIsChecked={setIsChecked}
				todo={todo}
				setTodo={setTodo}
			/>
			<div className="tasks">
				{filteredTodo.length ? (
					filteredTodo.map((task) => (
						<Task
							key={task.id}
							id={task.id}
							text={task.text}
							checked={task.completed}
							todo={todo}
							setTodo={setTodo}
						/>
					))
				) : (
					<NoTask />
				)}
				<Footer count={todo.length} setFilters={setFilters} setTodo={setTodo} />
			</div>
			<Drag />
		</div>
	);
};

export default App;
