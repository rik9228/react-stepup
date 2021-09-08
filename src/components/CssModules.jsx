import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.classes}>
      <p className={classes.text}>- CSS modules -</p>
      <p className={classes.title}>- CSS modules -</p>
    </div>
  );
};

export default CssModules;
