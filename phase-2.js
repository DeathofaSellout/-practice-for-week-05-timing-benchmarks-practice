const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let answer = []
  for (let i = 1; i <= 10; i+=1) {
    answer.push(addNums(i * increment));
  }
  return answer;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let answer = []
  for (let i = 1; i <= 10; i += 1) {
    answer.push(addManyNums(i * increment));
  }
  return answer;
}

module.exports = [addNums10, addManyNums10];