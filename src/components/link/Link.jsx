import styles from "./Link.module.scss";

export const Link = (props) => {
  return (
    <a className={styles[props.className]} href={props.href}>
      {props.text}
      {props.img && (
        <img
          className={styles.linkIcon}
          src={props.img}
          width="30px"
          height="30px"
        ></img>
      )}
    </a>
  );
};
