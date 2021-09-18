// for todo list
export const save = (todo) => {
	localStorage.setItem('Todo', JSON.stringify(todo));
};

export const retrive = (setTodo, setTheme) => {
	const localTodo = localStorage.getItem('Todo');
	setTodo(JSON.parse(localTodo) || []);
};

// for theme
export const saveTheme = (theme) => {
	localStorage.setItem('Theme', JSON.stringify(theme));
};

export const retriveTheme = (setTheme) => {
	const localTheme = localStorage.getItem('Theme');
	setTheme(JSON.parse(localTheme) || false);
};

/***************************** Ashiq Fury : --> https://github.com/ashiqfury ****************************************/
