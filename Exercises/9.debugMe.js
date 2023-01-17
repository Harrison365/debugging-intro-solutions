const { check, runTest, skipTest } = require("../test-api/index");
function addNumbers(num1, num2) {
  return Number(num1 + num2);
}

runTest(
  "Get addNumbers to return the sum of the 2 string numbers passed",
  function () {
    check(addNumbers("5", "6")).isEqualTo(11);
    check(addNumbers("11", "9")).isEqualTo(20);
    check(addNumbers("25", "26")).isEqualTo(51);
  }
);
