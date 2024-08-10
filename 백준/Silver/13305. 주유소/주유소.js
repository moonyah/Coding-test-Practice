const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let cityNum = BigInt(input[0]);
let distanceArr = input[1].split(" ").map((x) => BigInt(x));
let cityOilPriceArr = input[2].split(" ").map((x) => BigInt(x));

let currIndex = 0n;
let price = 0n;
let distances = 0n;

for (let i = 0n; i < cityNum - 1n; i++) {
  distances += distanceArr[BigInt(i)]; // 누적 거리

  // 현재 도시의 기름 가격보다 다음 도시의 기름 가격이 더 저렴하거나 마지막 도시일 경우
  if (
    cityOilPriceArr[BigInt(currIndex)] > cityOilPriceArr[BigInt(i) + 1n] ||
    i === cityNum - 2n
  ) {
    price += cityOilPriceArr[BigInt(currIndex)] * distances;
    distances = 0n; // 거리 초기화
    currIndex = i + 1n;
  }
}

// 마지막 구간 처리
if (distances > 0n) {
  price += cityOilPriceArr[BigInt(currIndex)] * distances;
}

console.log(price.toString());