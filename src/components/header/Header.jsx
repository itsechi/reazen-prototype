import styles from "./Header.module.scss";
import logo from "../../../public/header.png";
import shoppingCart from "../../../public/shoppingCart.png";
import profilePicture from "../../../public/profilePicture.png";
import { Button } from "../button/Button";
import { Link } from "../link/Link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button className="menuButton" text={"Menu"} />
      <div className={styles.headerTitle}>
        <img src={logo} width="48" height="48"></img>
        <p className={styles.headerText}>OtakuArtistry</p>
      </div>
      <div className={styles.headerInfo}>
        <Link href="#" img={shoppingCart} />
        <Link
          className="rightPadding"
          href="#"
          img={profilePicture}
          text="Account"
        />
      </div>
    </header>
  );
};
