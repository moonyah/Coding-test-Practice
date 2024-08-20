const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let regionNum = Number(input[0]);
let requiredBudget = input[1].trim().split(" ").map(Number);
let givenBudget = Number(input[2]);

let AscendingArr = requiredBudget.sort((a, b) => a - b);
// console.log(AscendingArr);

let totalBudget = requiredBudget.reduce((a, b) => a + b);
// console.log(totalBudget);

let answer = 0;
if (totalBudget <= givenBudget) {
  answer = AscendingArr[regionNum - 1];
} else {
  let remain = regionNum;
  for (let i = 0; i < regionNum; i++) {
    if (requiredBudget[i] < parseInt(givenBudget / (regionNum - i))) {
      givenBudget -= requiredBudget[i];
      answer = parseInt(givenBudget / (regionNum - i));
      // console.log("여기");
    } else if (requiredBudget[i] == parseInt(givenBudget / (regionNum - i))) {
      if (remain >= givenBudget % (regionNum - i)) {
        givenBudget -= requiredBudget[i];
        answer = parseInt(givenBudget / (regionNum - i));
      } else {
        break;
      }
    } else {
      // console.log("요기!");
      answer = parseInt(givenBudget / (regionNum - i));
      break;
    }
    // console.log(givenBudget);
  }
}
console.log(answer);
