const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number); // 걸그룹 수, 문제 수
// 팀 이름, 걸그룹 인원 수, 멤버의 이름
let teamSet = new Set();
let memberSet = new Set();
let numLine = 2;
let teamNameLine = 1;
for (let i = 0; i < N; i++) {
  let teamName = input[teamNameLine].trim();
  let teamNum = Number(input[numLine]);
  teamSet[teamName] = [];
  for (let j = numLine + 1; j < numLine + 1 + teamNum; j++) {
    let memberName = input[j].trim();
    teamSet[teamName].push(memberName);
    memberSet[memberName] = teamName;
  }
  teamNameLine += teamNum + 2;
  numLine += Number(input[numLine]) + 2;
}
// console.log(teamSet);
// console.log(memberSet);

let quizStartLine = numLine - 1;
for (let i = 0; i < M; i++) {
  let quiz = input[quizStartLine].trim();
  let quizSort = input[quizStartLine + 1].trim();
  if (quizSort == 1) {
    console.log(memberSet[quiz]);
  } else if (quizSort == 0) {
    teamSet[quiz].sort().map((a) => console.log(a));
  }
  quizStartLine += 2;
}
