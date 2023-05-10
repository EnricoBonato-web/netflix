import classes from "./Navigation.module.scss";
import NavigationItem from "./NavigationItem"

const links:{ href: string; name: string }[] = [
  { href: "", name: "Home" },
  { href: "", name: "TV Shows" },
  { href: "", name: "Movies" },
  { href: "", name: "New & Popular" },
  { href: "", name: "My List" },
  { href: "", name: "Browse by Languages" },
];
const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      {links.map(item => (<NavigationItem name={item.name} href={item.href} />))}
    </ul>
  );
};

export default Navigation;
