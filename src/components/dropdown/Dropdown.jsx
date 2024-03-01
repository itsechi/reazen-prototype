import styles from "./Dropdown.module.scss";

export const Dropdown = (props) => {
  return (
    <div
      className={[
        styles.dropdown,
        props.showDropdown && styles.dropdownVisible,
      ].join(" ")}
    >
      <ul className={styles.dropdownList}>
        <li className={styles.dropdownItem}>MENU ITEM 1</li>
        <li className={styles.dropdownItem}>MENU ITEM 2</li>
        <li className={styles.dropdownItem}>MENU ITEM 3</li>
        <li className={styles.dropdownItem}>MENU ITEM 4</li>
      </ul>
    </div>
  );
};
