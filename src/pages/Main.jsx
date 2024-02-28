import { Section } from "../components/section/Section";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainBg}></div>
      <Section
        header="Supporting Human Artists"
        text={`With the proliferation of AI-generated images, the art landscape is rapidly evolving. However, amidst this surge, we believe in championing the irreplaceable touch of human hands and the boundless imagination of artists. Each piece of artwork, every meticulously crafted merchandise, bears the soul of its creator, offering a glimpse into their unique perspective and passion.`}
        carousel="right"
        buttons={[
          { text: "Support your favorite artist", style: "primary" },
          { text: "Learn More", style: "secondary" },
        ]}
      />

      <Section
        header="Featured Artists"
        text={`We proudly showcase the incredible talents and creativity of the individuals who bring magic to our marketplace. Each artist featured here possesses a unique vision, style, and passion for anime and manga artistry. Get ready to explore a world of imagination and inspiration as you discover their captivating creations`}
        carousel="left"
        buttons={[
          { text: "Support your favorite artist", style: "primary" },
          { text: "Learn More", style: "secondary" },
        ]}
      />
    </main>
  );
};
