import styles from "./Section.module.scss";
import { Link } from "../link/Link";
import { Carousel } from "../carousel/Carousel";

export const Section = (props) => {
  const buttons = props.buttons.map((button, i) => (
    <Link key={i} className={button.style} href="#" text={button.text} />
  ));

  const images = [
    "https://placehold.co/300x450/purple/white/?text=1",
    "https://placehold.co/300x450/111B47/white/?text=2",
    "https://placehold.co/300x450?text=3",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionInfo}>
        {props.header && <h1>{props.header}</h1>}
        {props.subheader && <h2>{props.subheader}</h2>}
        <p>{props.text}</p>
        <div className={styles.sectionButtons}>{buttons}</div>
      </div>
      {props.carousel && <Carousel images={images} />}
    </section>
  );
};
