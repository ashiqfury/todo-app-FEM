export const save = (todo) => {
	localStorage.setItem('Todo', JSON.stringify(todo));
};

export const retrive = (todo, setTodo) => {
	const localTodo = localStorage.getItem('Todo');
	setTodo(JSON.parse(localTodo) || []);
};

/***************************** Ashiq Fury : --> https://github.com/ashiqfury ****************************************/
