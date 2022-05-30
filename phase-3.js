const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  let answer = []
  for (let i = 1; i <= 10; i += 1) {
    startTime = Date.now();
    answer.push(addNums(i * increment));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }
  return answer;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  let answer = []
  for (let i = 1; i <= 10; i += 1) {
    startTime = Date.now();
    answer.push(addManyNums(i * increment));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }
  return answer;
}


n = 1000000
console.log(`addNums(${n}): `);
console.time("addNums");
addNums10Timing(1000000);
console.timeEnd("addNums");

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
console.time("addManyNums");
addManyNums10Timing(5000);
console.timeEnd("addManyNums");