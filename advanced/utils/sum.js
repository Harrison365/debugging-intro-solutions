function sumArray(array) {
    const summed = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return summed;
  }