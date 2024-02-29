import styles from "./Section.module.scss";
import { Link } from "../link/Link";
import { Carousel } from "../carousel/Carousel";

export const Section = (props) => {
  const buttons = props.buttons.map((button, i) => (
    <Link key={i} className={button.style} href="#" text={button.text} />
  ));

  // const images = [
  //   "https://placehold.co/300x450/purple/white/?text=1",
  //   "https://placehold.co/300x450/111B47/white/?text=2",
  //   "https://placehold.co/300x450?text=3",
  // ];

  // just to test how things would look like
  const images = [
    'https://ih1.redbubble.net/image.2025556950.2718/flat,750x1000,075,f.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
    'https://mir-s3-cdn-cf.behance.net/project_modules/hd/c3ce7c103847551.5f564f6a622e3.jpg'
  ]

  return (
    <section
      className={[
        props.type === "reversed" ? styles.sectionLeft : "",
        styles.section,
      ].join(" ")}
    >
      <div className={styles.sectionInfo}>
        {props.header && <h1>{props.header}</h1>}
        {props.subheader && <h2>{props.subheader}</h2>}
        <p>{props.text}</p>
        <div className={styles.sectionButtons}>{buttons}</div>
      </div>
      {props.img && <img className={styles.sectionImg} src={props.img} />}
      {props.carousel && <Carousel images={images} />}
    </section>
  );
};
