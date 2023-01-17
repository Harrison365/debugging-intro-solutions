const { check, runTest, skipTest } = require("../test-api/index");

//

function returnMentorString(mentor) {
  return "Hello" + Mentor + "!";
}

runTest('Get returnMentorString to return "Hello Hannah!"', function () {
  check(returnMentorString("Hannah")).isEqualTo("Hello Hannah!");
});
runTest('Get returnMentorString to return "Hello Lewis!"', function () {
  check(returnMentorString("Lewis")).isEqualTo("Hello Lewis!");
});
runTest('Get returnMentorString to return "Hello Lewis!"', function () {
  check(returnMentorString("Harrison")).isEqualTo("Hello Harrison!");
});
