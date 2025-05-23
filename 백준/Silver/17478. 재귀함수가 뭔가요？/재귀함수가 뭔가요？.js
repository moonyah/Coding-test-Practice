const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]); // 재귀 횟수
console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
let question = `"재귀함수가 뭔가요?"`;
let story1 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
let story2 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
let story3 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
let result = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
let end = `라고 답변하였지.`;
function recursion(depth) {
  let underlines = Array(depth * 4)
    .fill("_")
    .join("");
  console.log(underlines + question);
  if (depth === N) {
    // 종료 조건
    console.log(underlines + result);
    console.log(underlines + end);
    return;
  } else {
    console.log(underlines + story1);
    console.log(underlines + story2);
    console.log(underlines + story3);
  }
  recursion(depth + 1);
  console.log(underlines + end);
}
recursion(0);
