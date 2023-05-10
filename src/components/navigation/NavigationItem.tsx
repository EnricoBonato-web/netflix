import classes from "./NavigationItem.module.scss";

const NavigationItem = (props:{name:string, href:string}):any => {
  return (
    <li className={classes.navigation_item}>
      <a href={props.href} >{props.name}</a>
    </li>
  );
};
export default NavigationItem;
