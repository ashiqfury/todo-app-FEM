import React from 'react';

const Footer = ({ count }) => {
	return (
		<div className="footer">
			<p className="footer--count">{count} items left</p>
			<div className="footer__filter">
				<button className="footer__filter--all  btn active">All</button>
				<button className="footer__filter--active btn">Active</button>
				<button className="footer__filter--completed btn">Completed</button>
			</div>
			<button className="footer--clear btn">Clear Completed</button>
		</div>
	);
};

export default Footer;
