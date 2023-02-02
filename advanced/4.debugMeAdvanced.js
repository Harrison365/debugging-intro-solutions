function sumSentence(arr) {
    const costs = arr.map((fruitObj) => fruitObj.cost);
    const total = sumArray(costs);
    return `The total cost of the fruits is £${total}`;
  }