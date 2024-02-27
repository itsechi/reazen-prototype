import styles from "./Header.module.scss";
import logo from "../../../public/header.png";
import shoppingCart from "../../../public/shoppingCart.png";
import profilePicture from "../../../public/profilePicture.png";
import { Button } from "../button/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button className={"menuButton"} text={"Menu"} />
      <div className={styles.headerTitle}>
        <img src={logo} width="48" height="48"></img>
        <p className={styles.headerText}>OtakuArtistry</p>
      </div>
      <div className={styles.headerInfo}>
        <a href="#">
          <img className={styles.infoIcon} src={shoppingCart} width="30px" height="30px"></img>
        </a>
        <a className={styles.infoUserBtn} href="#">
          Account
          <img className={styles.infoIcon} src={profilePicture} width="30px" height="30px"></img>
        </a>
      </div>
    </header>
  );
};
