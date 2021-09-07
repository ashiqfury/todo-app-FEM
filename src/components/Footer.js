import React, { useRef } from 'react';

const Footer = ({ count, setFilters, setTodo }) => {
	const allBtn = useRef(null);
	const activeBtn = useRef(null);
	const completedBtn = useRef(null);

	const allBtns = [allBtn, activeBtn, completedBtn];

	const clickHandler = (e) => {
		if (e.target.innerHTML === 'All') setFilters('all');
		if (e.target.innerHTML === 'Active') setFilters('active');
		if (e.target.innerHTML === 'Completed') setFilters('completed');

		activeChanger(e);
	};

	const activeChanger = (e) => {
		allBtns.forEach((btn) => btn.current.classList.remove('active'));
		e.target.classList.add('active');
	};

	return (
		<div className="footer">
			<p className="footer--count">{count} items left</p>
			<div className="footer__filter">
				<button className="footer__filter--all  btn active" onClick={clickHandler} ref={allBtn}>
					All
				</button>
				<button className="footer__filter--active btn" onClick={clickHandler} ref={activeBtn}>
					Active
				</button>
				<button className="footer__filter--completed btn" onClick={clickHandler} ref={completedBtn}>
					Completed
				</button>
			</div>
			<button className="footer--clear btn" onClick={() => setTodo([])}>
				Clear Completed
			</button>
		</div>
	);
};

export default Footer;
