const Dimensions = {
   isSmallScreen: (width) => {
      return /xs|sm/.test(width);
   }
};

export {Dimensions};
