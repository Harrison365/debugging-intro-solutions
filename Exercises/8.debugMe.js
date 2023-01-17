const { check, runTest, skipTest } = require("../test-api/index");
function returnLastDigit(numberStr) {
  digitsArray = numberStr.split("");
  return digitsArray[digitsArray.length - 1];
}

runTest("Get returnLastDigit to return the correct number", function () {
  check(returnLastDigit("1001")).isEqualTo(1);
  check(returnLastDigit("4598")).isEqualTo(8);
  check(returnLastDigit("359579")).isEqualTo(9);
  check(returnLastDigit("390")).isEqualTo(0);
});
