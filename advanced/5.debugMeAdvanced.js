function returnHighest(array, num) {

    array.sort((a, b) => {
      return b.score - a.score;
    });
  
    let multipleOfNum = 0; 
    for (let i = 1; i <= array.length; i++) {
      if (i % num === 0) {
        multipleOfNum++;
      }
    }
    const newArray = array.filter((object, index) => {
      return index < multipleOfNum;
    });
    return newArray;
  }