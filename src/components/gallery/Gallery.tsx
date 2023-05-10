import classes from "./Gallery.module.scss";
import HomeVideo from "./Video/HomeVideo";
const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <HomeVideo/>
    </div>
  );
};

export default Gallery;