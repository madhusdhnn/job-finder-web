const Dimensions = {
   isSmallScreen: (width) => {
      return /xs|sm/.test(width);
   }
};

const Arrays = {
   uniqBy: (arr = [], iteratee = '') => {
      if (arr && iteratee) {
         return [...new Map(arr.map(i => [i[iteratee], i])).values()];
      }
      return [];
   }
};

export {Dimensions, Arrays};
