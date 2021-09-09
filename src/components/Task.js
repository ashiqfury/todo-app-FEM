import close from '../images/icon-cross.svg';

const Task = ({ id, text, todo, setTodo, checked, provided }) => {
	let toggler = checked;
	let index = -1;
	const completedHandler = () => {
		toggler = !checked;

		todo.forEach((task, i) => {
			if (task.id === id) index = i;
		});
		const dupTodo = [...todo];
		dupTodo[index] = { id, text, completed: toggler };
		setTodo(dupTodo);
	};

	const deleteHandler = () => {
		const filteredTodo = todo.filter((task) => task.id !== id);
		setTodo(filteredTodo);
	};

	return (
		<div
			className="task"
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
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
