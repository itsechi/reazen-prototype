import styles from "./Header.module.scss";
import React from "react";
import logo from "/header.png";
import shoppingCart from "/shoppingCart.png";
import profilePicture from "/profilePicture.png";
import { Button } from "../button/Button";
import { Link } from "../link/Link";
import { Dropdown } from "../dropdown/Dropdown";

export const Header = () => {
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerDropdown}>
        <Button
          className="menuButton"
          text={"Menu"}
          dropdownStatus={dropdown}
          setDropdown={setDropdown}
        />
        {dropdown && <Dropdown />}
      </div>
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
