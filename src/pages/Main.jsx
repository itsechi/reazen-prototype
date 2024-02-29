import { Section } from "../components/section/Section";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainBg}></div>
      <Section
        header="Supporting Human Artists"
        text={`With the proliferation of AI-generated images, the art landscape is rapidly evolving. However, amidst this surge, we believe in championing the irreplaceable touch of human hands and the boundless imagination of artists. Each piece of artwork, every meticulously crafted merchandise, bears the soul of its creator, offering a glimpse into their unique perspective and passion.`}
        carousel
        buttons={[
          { text: "Support your favorite artist", style: "primary" },
          { text: "Learn More", style: "secondary" },
        ]}
      />

      <Section
        header="Featured Artists"
        text={`We proudly showcase the incredible talents and creativity of the individuals who bring magic to our marketplace. Each artist featured here possesses a unique vision, style, and passion for anime and manga artistry. Get ready to explore a world of imagination and inspiration as you discover their captivating creations.`}
        carousel
        type="reversed"
        buttons={[
          { text: "Support your favorite artist", style: "primary" },
          { text: "Learn More", style: "secondary" },
        ]}
      />

      <Section
        header="Why Support Human Artists?"
        text={`Choosing products from human artists over AI-generated images offers a multitude of advantages that go beyond mere aesthetics. By supporting human artists, you're not just acquiring artwork – you're investing in authenticity, creativity, and the livelihoods of talented individuals who pour their heart and soul into their craft.`}
        img={
          "https://s3-alpha-sig.figma.com/img/b244/480e/ad30b96c6539567480f643849041f672?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ACHyo0T4wNEalrL~RYASNv0gSBNazbsHEbvT60JvWTT-vBc6AxUnUwVEoxIU9uyEIPSZ-jH~~9dCiZ9gDJMAo85kD~cMRlRCLre~BnkCToGK-sUljm9zExsfI2JthvWnGMm32xojOSc7X0RzRjtDmUfeHvj3sNJwqeJWMQnshVZgki0enYwfpYi8xm5sjZ~~vqFUG7GzBRIH~qL7I8222tW-DGoXz6U2Yn2nPsl22PQhshMvoxaSdn1mRvHnzOuaIB-b579R9-Mz~4iFdZrbYjvYzntIM1T~SulbuwT74DgOeFPpMQfXDcI98pkb0Gq5Y2GXmdHV3161NC8NmJ0JvA__"
        }
        type="reversed"
        buttons={[{ text: "Learn More", style: "primary" }]}
      />

      <Section
        header="Elevate your style"
        text={`Each design in our lineup is meticulously crafted to embody the spirit of authenticity, featuring original characters brought to life by talented human artists. Dive into a world where passion meets quality, and where every stitch tells a story of creativity and dedication.`}
        img={
          "https://s3-alpha-sig.figma.com/img/cfec/09d8/266a3162a1a06a296558fde1d8add111?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCaYzVGjsqO4FG1sU9fFD4BZ62MYAOqw-oOJn74poVMJFaU2cAhv0-tKt8TX6DjFMyYv~QGE8zkXripcsbN1feXiNpRQ7rjlrbPnTCb6C4X3CjMZzL~OyUMt1vd6jDlJSMpoQxdsy0zxnT~TSVEqF9R09OcVzM~8whfm6AKC73IIHpIYCAGkDjZywrvNlXpTfa77gRoBitcmPEVhkP5-dDBNlRVlvy2aw56rLSnUhT1YzlCxHuzVz89omp0RHtkO0Sxx0zdVMH4tdpMflXOfpRtLj3nCVODcpeyRfWq9rG20880qFlj3x2NjbWQ~bHQxbdjdQEM~1a5NCkWifF3UlQ__"
        }
        buttons={[{ text: "Buy now", style: "secondary" }]}
      />
    </main>
  );
};
