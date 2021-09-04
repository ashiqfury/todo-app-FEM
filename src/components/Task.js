import React from 'react';
import close from '../images/icon-cross.svg';

const Task = ({ id, text, completed }) => {
	console.log(id);
	return (
		<div className="task">
			<input type="checkbox" className="checkbox task--checkbox" id={id} />
			<label htmlFor={id} className="task--label checkbox-label" />
			<p className="task--text">{text}</p>
			<img src={close} alt="close" className="task--close" />
		</div>
	);
};

export default Task;
