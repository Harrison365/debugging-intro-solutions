const { check, runTest, skipTest } = require("../test-api/index");
function findingNemo(fish) {
  const fishTank = {
    "Clown Fish": "Nemo",
    "Blue Tang": "Dory",
    "Great White Shark": "Bruce",
    "Moorish Idol": "Gill",
    "Sea Turtle": "Crush",
  };

  return tank[fish];
}

runTest("Get finsdingNemo to return the name of the given fish", function () {
  check(findingNemo("Clown Fish")).isEqualTo("Nemo");
});
