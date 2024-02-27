import styles from "./Link.module.scss";

export const Link = (props) => {
  // if there is text, change the display to a button
  const classes = props.text
    ? [styles[props.className], "button"].join(" ")
    : styles[props.className];

  return (
    <a className={classes} href={props.href}>
      {props.text}
      {props.img && (
        <img
          className={styles.linkIcon}
          src={props.img}
          width="40px"
          height="40px"
        ></img>
      )}
    </a>
  );
};
