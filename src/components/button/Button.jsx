import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
      className={[styles[props.className], "button"].join(" ")}
      onClick={() => props.setDropdown(!props.dropdownStatus)}
    >
      {props.text}
    </button>
  );
};
