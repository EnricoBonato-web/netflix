import classes from "./HomeVideo.module.scss";
import RightIcons from "./RightIcons";
import TitleCard from "./TitleCard";

const HomeVideo = () => {
  return (
    <div className={classes.video}>
      <TitleCard />
      <RightIcons />
    </div>
  );
};
export default HomeVideo;
