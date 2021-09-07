import React from 'react';

const NoTask = () => {
	return (
		<div className="notask">
			<div className="notask__text notask__text-top">You have</div>
			<div className="notask__text--highlight">No task</div>
			<div className="notask__text notask__text-bottom">to complete</div>
		</div>
	);
};
export default NoTask;
