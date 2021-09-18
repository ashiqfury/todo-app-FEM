import { useState, useEffect } from 'react';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';
import { saveTheme, retriveTheme } from '../localStorage';

const Header = () => {
	const [theme, setTheme] = useState(false); // default dark theme

	const clickHandler = () => {
		!theme ? setTheme(true) : setTheme(false);
		document.body.classList.toggle('light');
	};

	useEffect(() => {
		retriveTheme(setTheme);
	}, [])

	useEffect(() => {
		theme ? document.body.classList.add('light') : document.body.classList.remove('light');
		saveTheme(theme);
	}, [theme]);

	return (
		<div className="header">
			<a href="https://www.github.com/ashiqfury" className="link-to-fury">
				<h1 className="header--text">Todo</h1>
			</a>
			{theme ? (
				<img src={moon} onClick={clickHandler} alt="Dark Theme" className="header--toggler" />
			) : (
				<img src={sun} onClick={clickHandler} alt="Dark Theme" className="header--toggler" />
			)}
		</div>
	);
};

export default Header;

/***************************** Ashiq Fury : --> https://github.com/ashiqfury ****************************************/
