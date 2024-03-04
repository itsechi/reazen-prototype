export const variants = {
  centerImage: {
    center: {
      x: 0,
      scale: 1,
    },
    right: {
      x: "-80%",
      scale: 0.8,
      transition: {
        duration: 0.25,
      },
    },
    left: {
      x: "80%",
      scale: 0.8,
      transition: {
        duration: 0.25,
      },
    },
    hover: {
      scale: 1.1,
    },
  },

  leftImage: {
    center: {
      x: "30%",
      scale: 0.8,
      transition: {
        duration: 0.001,
      },
    },
    left: {
      x: "70%",
      scale: 1,
    },
    hover: {
      rotate: "-2deg",
      scale: 0.85,
      transition: {
        duration: 0.01,
      },
    },
  },

  rightImage: {
    center: {
      x: "-30%",
      scale: 0.8,
      transition: {
        duration: 0.001,
      },
    },
    right: {
      x: "-70%",
      scale: 1,
    },
    hover: {
      rotate: "2deg",
      scale: 0.85,
      transition: {
        duration: 0.01,
      },
    },
  },
};
