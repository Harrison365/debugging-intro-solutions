const { check, runTest, skipTest } = require("../test-api/index");

//make the function return "Hello, I am a cat and my name is Jewels"

function returnCatString() {
  const catName = "Jewels";
  return `Hello, I am a cat and my name is ${catName}`;
}

runTest('Get sayHello to return "hello students"', function () {
  check(returnCatString()).isEqualTo("Hello, I am a cat and my name is Jewels");
});
