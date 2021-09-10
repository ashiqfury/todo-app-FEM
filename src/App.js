import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';
import NoTask from './components/NoTask';
import Drag from './components/Drag';
import './css/style.css';
import { save, retrive } from './localStorage';

const App = () => {
	const [todo, setTodo] = useState([]); // List of all todos
	const [isChecked, setIsChecked] = useState(false); // input field checkbox
	const [filters, setFilters] = useState('all');
	const [filteredTodo, setFilteredTodo] = useState([]);

	// retriving local storage data only once.
	useEffect(() => {
		retrive(todo, setTodo);
	}, []);

	// saving data to localstorage everytime when data changes
	useEffect(() => {
		save(todo);
	}, [todo]);

	// function for completed all checkbox
	useMemo(() => {
		const array = todo.map((task) => {
			return {
				id: task.id,
				text: task.text,
				completed: isChecked,
			};
		});
		setTodo(array);
	}, [isChecked]);

	useEffect(() => {
		filters === 'all' && setFilteredTodo(todo.map((task) => task));
		filters === 'active' && setFilteredTodo(todo.filter((task) => task.completed === false));
		filters === 'completed' && setFilteredTodo(todo.filter((task) => task.completed === true));
	}, [filters, todo]);

	const onDragEnd = useCallback(
		(param) => {
			const srcI = param.source.index;
			const desI = param.destination.index;
			let dupTodo = [...todo];
			dupTodo[srcI] = todo[desI];
			dupTodo[desI] = todo[srcI];
			setTodo(dupTodo);
		},
		[todo]
	);

	return (
		<div className="container">
			<Header />
			<Input isChecked={isChecked} setIsChecked={setIsChecked} todo={todo} setTodo={setTodo} />
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="tasks">
					<Droppable droppableId="droppable-1">
						{(provided, snapshot) => (
							<div
								className="draggable--container"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{filteredTodo.length ? (
									filteredTodo.map((task, index) => (
										<Draggable key={task.id} draggableId={`draggable-${task.id}`} index={index}>
											{(provided, snapshot) => (
												<Task
													key={task.id}
													id={task.id}
													text={task.text}
													checked={task.completed}
													todo={todo}
													setTodo={setTodo}
													indexValue={index}
													provided={provided}
												/>
											)}
										</Draggable>
									))
								) : (
									<NoTask />
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Footer count={todo.length} setFilters={setFilters} setTodo={setTodo} todo={todo} />
				</div>
			</DragDropContext>
			<Drag />
		</div>
	);
};

export default App;
