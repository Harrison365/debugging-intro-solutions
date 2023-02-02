function compoundInterest(value, interestRate, years) {
    let bankAccount = value;
    for (let i = 1; i <= years; i++) {
      bankAccount *= interestRate + 1;
    }
    return Math.floor(bankAccount * 100) / 100;
  }