const { check, runTest, skipTest } = require("../test-api/index");

function sayHello() {
  return "hello students";
}

runTest('Get sayHello to return "hello students"', function () {
  check(sayHello()).isEqualTo("hello students");
});
