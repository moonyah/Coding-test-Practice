const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
// N은 학생 수, 한 방의 최대 인원 수
// 각 줄은 성별 S와 학녕 Y가 공백으로 분리
// 여학생은 0, 남학생은 1
let arr = Array(7).fill(0);
for (let i = 0; i < arr.length; i++) {
  arr[i] = [0, 0];
}

for (let i = 1; i <= N; i++) {
  let [S, Y] = input[i].split(" ").map(Number);
  arr[Y][S]++;
}

let room = 0;
for (let i = 1; i < arr.length; i++) {
  room += Math.ceil(arr[i][0] / K);
  room += Math.ceil(arr[i][1] / K);
}
console.log(room);