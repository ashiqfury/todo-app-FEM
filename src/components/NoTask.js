import React from 'react';

const NoTask = () => {
	return (
		<div className="notask">
			<span className="notask__text notask__text-top">You have</span>
			<span className="notask__text--highlight">No task</span>
			<span className="notask__text notask__text-bottom">to complete</span>
		</div>
	);
};
export default NoTask;
