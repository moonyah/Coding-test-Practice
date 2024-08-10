// n번째 도시까지 보다 싸면 n번의 거리 합만큼 기름 넣기
// 현재 도시보다 싼 곳이 나오기 전까지 거리를 갈 수 있는 기름 넣기
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let cityNum = Number(input[0]);
let oil = input[1].split(" ").map(Number);
let oilPrice = input[2].split(" ").map(Number);
// console.log(cityNum, oil, oilPrice);

// curr도시에서 다음 도시, 다음 도시로 가다가 더 가격이 싼 곳이 나올 때까지 간다.
// 더 싼 곳이 나오면 도로 몇개를 갔는지 계산한다. curr도시는 업데이트 된다.
// 총 km와 curr의 oilPrice를 곱해서 answer에 합한다.
// 다음은 현재 있는 도시에서 시작한다.

let currCityIndex = 0;
let roadStack = 0;
let answer = 0;
for (let i = 0; i < cityNum; i++) {
  // console.log(oilPrice[currCityIndex], oilPrice[i]);
  roadStack++;
  // console.log(roadStack);
  if (oilPrice[i] < oilPrice[currCityIndex] || i == cityNum - 1) {
    // 더 싼 곳을 발견했을 때
    // console.log(
    //   "여기 oilPrice가 더 싸거나 마지막 도시라서 멈췄어요.",
    //   oilPrice[i]
    // );
    if (currCityIndex == 0) roadStack--;
    // console.log("길 이만큼 갔어요", roadStack);

    let roadOil = oil
      .splice(0, roadStack)
      .reduce((a, b) => a + b * oilPrice[currCityIndex], 0);
    // console.log("roadOil", roadOil);
    answer += roadOil;
    roadStack = 0;
    currCityIndex = i;
  }
}
console.log(answer);
// https://www.acmicpc.net/problem/13305
