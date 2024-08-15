// 1번 째 문자와 n번 째 문자 비교해서 같으면
// 2, n-2

// 다르면 다음 문자 2, n-3이나 3, n-2 비교 같은 거 있으면 유사회문 가능성 있음
// 계속 비교해서 다른 거 또 나오면 유사 회문 탈락이라 2 출력
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let arr = input[i].trim().split("");
  let answer = 1;

  let halfIndex = Math.ceil(arr.length / 2) - 1;
  let len = arr.length;
  let frontGap = 0;
  let backGap = 0;
  let chance = 1;

  let aIndex = 0;
  let bIndex = 0;
  for (let j = 0; j <= halfIndex; j++) {
    aIndex = j - frontGap;
    bIndex = len - j - 1 + backGap;
    if (arr[aIndex] !== arr[bIndex]) {
      if (bIndex - aIndex == 1) {
        chance--;
        break;
      }
      // console.log(arr[aIndex], arr[bIndex]);
      if (
        arr[aIndex] !== arr[bIndex - 1] &&
        arr[aIndex + 1] !== arr[bIndex] &&
        aIndex - bIndex !== 1
      ) {
        chance = -1;
        break;
      } else {
        if (arr[aIndex] == arr[bIndex - 1] && arr[aIndex + 1] == arr[bIndex]) {
          // 둘 다 같을 경우
          // console.log("이 경우를 더 나눠야 한다.");
          if (arr[aIndex] == arr[bIndex - 2]) {
            backGap = 1;
            chance--;
          }
          if (arr[aIndex + 2] == arr[bIndex]) {
            frontGap = 1;
            chance--;
          }
        } else {
          if (arr[aIndex] == arr[bIndex - 1]) {
            frontGap = 1;
            chance--;
          }
          if (arr[aIndex + 1] == arr[bIndex]) {
            backGap = 1;
            chance--;
          }
        }
      }
    }
  }

  if (chance == 0) {
    answer = 1;
  } else if (chance == 1) {
    answer = 0;
  } else {
    answer = 2;
  }

  console.log(answer);
}
