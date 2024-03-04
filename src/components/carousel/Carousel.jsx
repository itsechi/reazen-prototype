import React from "react";
import styles from "./Carousel.module.scss";
import { motion } from "framer-motion";
import { variants } from "../../assets/variants";

export const Carousel = (props) => {
  const { images } = props;
  const [direction, setDirection] = React.useState("left");
  const [activeIndex, setActiveIndex] = React.useState(1);
  const nextSlide = () => {
    setDirection("left");
    console.log(direction);
    setActiveIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.carouselBtn}>
        <span
          className={[styles.carouselArrow, "material-symbols-outlined"].join(
            " "
          )}
        >
          arrow_back
        </span>
      </button>

      <div className={styles.carouselImgs} key={activeIndex}>
        <motion.img
          src={
            activeIndex - 1 >= 0
              ? images[activeIndex - 1]
              : images[images.length - 1]
          }
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgLeft].join(" ")}
          onClick={prevSlide}
          variants={variants.leftImage}
          animate={"center"}
          initial={"left"}
          whileHover={"hover"}
        />

        <motion.img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgCenter].join(" ")}
          variants={variants.centerImage}
          animate={"center"}
          initial={direction === "left" ? "left" : "right"}
          whileHover={"hover"}
        />
        <motion.img
          src={
            activeIndex + 1 < images.length
              ? images[activeIndex + 1]
              : images[0]
          }
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgRight].join(" ")}
          onClick={nextSlide}
          variants={variants.rightImage}
          animate={"center"}
          initial={"right"}
          whileHover={"hover"}
        />
      </div>

      <button onClick={nextSlide} className={styles.carouselBtn}>
        <span
          className={[styles.carouselArrow, "material-symbols-outlined"].join(
            " "
          )}
        >
          arrow_forward
        </span>
      </button>
    </div>
  );
};
