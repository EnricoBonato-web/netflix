import classes from "./Header.module.scss";
import { FaSearch, FaRegBell } from 'react-icons/fa';
import Navigation from "./navigation/Navigation"



const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='/logo.png' alt="Logo" />
      <Navigation/> 
      <div className={classes.navigation_right}>
        <FaSearch/>
        <FaRegBell/>
      </div>
    </header>
  );
};

export default Header;