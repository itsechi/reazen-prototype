import styles from "./Section.module.scss";
import { Link } from "../link/Link";

export const Section = (props) => {
  const buttons = props.buttons.map((button) => (
    <Link className={button.style} href="#" text={button.text} />
  ));

  return (
    <section className={styles.section}>
      <div className={styles.sectionInfo}>
        {props.header && <h1>{props.header}</h1>}
        {props.subheader && <h2>{props.subheader}</h2>}
        <p>{props.text}</p>
        <div className={styles.sectionButtons}>{buttons}</div>
      </div>
      {props.carousel && <div className={styles.carousel}></div>}
    </section>
  );
};
