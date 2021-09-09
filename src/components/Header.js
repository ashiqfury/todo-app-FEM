import { useState } from 'react';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';

const Header = () => {
	const [theme, setTheme] = useState('');

	const clickHandler = () => {
		theme === '' ? setTheme('light') : setTheme('');
		document.body.classList.toggle('light');
	};

	return (
		<div className="header">
			<h1 className="header--text">Todo</h1>
			{theme === 'light' ? (
				<img src={moon} onClick={clickHandler} alt="Dark Theme" className="header--toggler" />
			) : (
				<img src={sun} onClick={clickHandler} alt="Dark Theme" className="header--toggler" />
			)}
		</div>
	);
};

export default Header;
