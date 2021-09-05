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

	const keyHandler = (e) => {
		// Input field submit handler
		if (e.key === 'Enter') {
			setTodo([...todo, { id: Math.random() * 10000, text: value, completed: false }]);
			console.log('todo submit', todo);
			setValue('');
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
				{todo.length ? (
					todo.map((task) => (
						<Task
							// key={task.id}
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
				<Footer count={todo.length} />
			</div>
		</div>
	);
};

export default App;
