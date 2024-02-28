import React from "react";
import styles from "./Carousel.module.scss";

export const Carousel = (props) => {
  const { images } = props;
  const [activeIndex, setActiveIndex] = React.useState(1);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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

      <div className={styles.carouselImgs}>
        <img
          src={
            activeIndex - 1 >= 0
              ? images[activeIndex - 1]
              : images[images.length - 1]
          }
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgLeft].join(" ")}
        />

        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgCenter].join(" ")}
        />

        <img
          src={
            activeIndex + 1 < images.length
              ? images[activeIndex + 1]
              : images[0]
          }
          alt={`Slide ${activeIndex}`}
          width="300px"
          height="450px"
          className={[styles.carouselImg, styles.carouselImgRight].join(" ")}
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
