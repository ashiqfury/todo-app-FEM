import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';

const Header = ({ light }) => {
	return (
		<div className="header">
			<h1 className="header--text">Todo</h1>
			{light ? (
				<img src={moon} alt="Dark Theme" className="header--toggler" />
			) : (
				<img src={sun} alt="Dark Theme" className="header--toggler" />
			)}
		</div>
	);
};

export default Header;
