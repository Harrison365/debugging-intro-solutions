//Find the Error in this file.

const { check, runTest, skipTest } = require("../test-api/index");

function addSnack(snack) {
  const snacks = [
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
  ];
  snacks.push(snack);
  return snacks;
}

runTest("Get addSnack to return an array with updated snacks", function () {
  check(addSnack("Pistachios")).isEqualTo([
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
    "Pistachios",
  ]);
});
