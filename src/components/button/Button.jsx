import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button className={styles[props.className]}>
      {props.text}
      {props.img && <img src={props.img} width="30px" height="30px"></img>}
    </button>
  );
};
