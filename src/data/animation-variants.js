export const instructionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  };

  export const arrowVariants = {
    hidden: {
      opacity: 0,
      zIndex: -1,
      y: -80,
      transition: {type: 'spring', delay: 0.1},
    },
    visible: {
      opacity: 1,
      zIndex: 1,
      y: 0,
      transition: {type: 'spring', delay: 0.3},
    }
  };

  export const projectTitleVariants = {
    hidden: {
      opacity: 0,
      zIndex: -1,
      y: -30,
      transition: {type: 'spring', delay: 0.3},
    },
    visible: {
      opacity: 1,
      zIndex: 1,
      y: 0,
      transition: {type: 'spring', delay: 0.3},
    }
  };

  export const projecCardVariants = {
    hidden: {
      opacity: 0,
      zIndex: -1,
      y: -30,
      transition: {type: 'spring', delay: 0.1},
    },
    visible: {
      opacity: 1,
      zIndex: 1,
      y: 0,
      transition: {type: 'spring', delay: 0.3},
    }
  };