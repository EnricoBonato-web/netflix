import classes from "./Header.module.scss";
import { FaSearch, FaRegBell } from 'react-icons/fa';



const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='/logo.png' alt="Logo" />
      <ul className={classes.navigation}>
        <li className={classes.navigation_item} >
          <a href="/browse">Home</a>
        </li>
        <li className={classes.navigation_item}>
          <a href="/browse/genre/83">TV Shows</a>
        </li>
        <li className={classes.navigation_item}>
          <a href="/browse/genre/34399">Movies</a>
        </li>
        <li className={classes.navigation_item}>
          <a href="/latest">New &amp; Popular</a>
        </li>
        <li className={classes.navigation_item}>
          <a href="/browse/my-list">My List</a>
        </li>
        <li className={classes.navigation_item}>
          <a href="/browse/original-audio">Browse by Languages</a>
        </li>
      </ul>
      <div className={classes.navigation_right}>
        <FaSearch/>
        <FaRegBell/>
      </div>
    </header>
  );
};

export default Header;