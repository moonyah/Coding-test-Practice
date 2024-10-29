const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let L = Number(input[0]);

for (let i = 1; i < L + 1; i++) {
  let beforeArr = [];
  let AfterArr = [];
  let typingArr = input[i].trim().split("");
  for (let j of typingArr) {
    if (j === "<") {
      if (beforeArr.length > 0) {
        AfterArr.push(beforeArr.pop());
      }
    } else if (j === ">") {
      if (AfterArr.length > 0) {
        beforeArr.push(AfterArr.pop());
      }
    } else if (j === "-") {
      if (beforeArr.length > 0) {
        beforeArr.pop();
      }
    } else {
      // console.log("문자 넣기");
      beforeArr.push(j);
    }
  }
  let reverseAfter = AfterArr.reverse();
  console.log([...beforeArr, ...reverseAfter].join(""));
}
