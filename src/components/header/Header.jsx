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
  const ref = React.useRef();

  const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = (e) => {
        if (!ref.current || ref.current.contains(e.target)) return;
        handler(e);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };
  useOnClickOutside(ref, () => setDropdown(false));

  return (
    <header className={styles.header}>
      <div className={styles.headerDropdown}>
        <Button
          className="menuButton"
          text={"Menu"}
          dropdownStatus={dropdown}
          setDropdown={setDropdown}
        />
        <div ref={ref}>
          {" "}
          <Dropdown showDropdown={dropdown} />
        </div>
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
