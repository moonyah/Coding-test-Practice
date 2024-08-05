const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = input[0].split(" ");
const arr = input[1].split(" ").map(Number);
// console.log(arr);

// 힌트, 미리 arr의 값에 대한 인덱스를 저장해두는 방법을 생각해보기
// 힌트, {원본 값: 인덱스} 형식으로 매핑을 만들어 두기
const arrStd = [...new Set(arr)].sort((a, b) => a - b);
// console.log(arrStd);

const indexMap = {};
for (let i = 0; i < arrStd.length; i++) {
  indexMap[arrStd[i]] = i;
}
// console.log(indexMap);

const answer = arr.map((value) => indexMap[value]); // O(1) 시간 복잡도

console.log(answer.join(" "));
