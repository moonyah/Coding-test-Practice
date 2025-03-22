let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let flowersSort = Number(input[0]);
let flowersLife = [];
for (let i = 1; i <= flowersSort; i++) {
  let life = input[i].split(" ").map(Number);
  flowersLife.push(life);
}
// console.log(flowersLife);
// 일단 3/1을 포함하는 기간을 가진 꽃을 선택하고 그 꽃들 중 가장 긴 기간 선택
// 그 다음 꽃은 그 긴 기간의 끝나는 날을 포함하는 기간들 중 가장 긴 기간 선택
// 그 다음 꽃은 마찬가지로 ... 한다...
// 선택한 꽃이 11/30일을 포함하면 선택이 끝나는 것이다.

let includeDay = [3, 1]; // 3월 1일 // 포함할 날짜 (갱신될 예정)
let minFlowerCount = 0;
for (let i = 0; i < flowersSort; i++) {
  // pickFlowerIncludeLastDay가 LastDay(11월 30일)을 포함하지 않아서 false이면 계속 진행됨
  // 3, 1일을 포함하려면.... 1월 가능, 2월 가능, 3월 1일 가능
  // console.log("includeDay", includeDay);
  let impossibleStartArr = impossibleStart(includeDay, flowersLife);
  // console.log(impossibleStartArr);
  if (impossibleStartArr.length === 0) {
    minFlowerCount = 0;
    break;
  }
  // console.log("impossibleStartArr", impossibleStartArr);
  // 여기에서 가장 긴 기간 선택
  let LastDayOfLongFlowerLife = FindLastDayLongFlowerLife(
    includeDay,
    impossibleStartArr
  );
  // console.log("LastDayOfLongFlowerLife", LastDayOfLongFlowerLife);

  // LastDayOfLongFlowerLife가 LastDay(11월 30일) 포함하는지 확인
  if (i === flowersSort - 1 && LastDayOfLongFlowerLife[0] <= 11) {
      minFlowerCount = 0; // 주의
      break;
  }
  minFlowerCount++;
  includeDay = LastDayOfLongFlowerLife;
  if (LastDayOfLongFlowerLife[0] > 11) break;
}
console.log(minFlowerCount);

function impossibleStart(includeDay, flowersLife) {
  let impossibleStart = [];
  for (let i = 0; i < flowersSort; i++) {
    // 끝나는 날이 includeDay를 포함하는지도 확인해야 한다.
    if (includeDay[0] < flowersLife[i][2]) {
      // 포함
    } else if (
      includeDay[0] === flowersLife[i][2] &&
      includeDay[1] < flowersLife[i][3]
    ) {
      // 포함
    } else {
      continue;
    }

    if (includeDay[0] > flowersLife[i][0]) {
      impossibleStart.push(flowersLife[i]);
    } else if (
      includeDay[0] === flowersLife[i][0] &&
      includeDay[1] >= flowersLife[i][1]
    ) {
      impossibleStart.push(flowersLife[i]);
    }
  }
  return impossibleStart;
}

function FindLastDayLongFlowerLife(includeDay, impossibleStartArr) {
  let LastDayOfLongFlowerLife = includeDay;
  for (let i = 0; i < impossibleStartArr.length; i++) {
    if (impossibleStartArr[i][2] > LastDayOfLongFlowerLife[0]) {
      LastDayOfLongFlowerLife[0] = impossibleStartArr[i][2];
      LastDayOfLongFlowerLife[1] = impossibleStartArr[i][3];
    } else if (
      impossibleStartArr[i][2] === LastDayOfLongFlowerLife[0] &&
      impossibleStartArr[i][3] >= LastDayOfLongFlowerLife[1]
    ) {
      LastDayOfLongFlowerLife[1] = impossibleStartArr[i][3];
    }
  }
  return LastDayOfLongFlowerLife;
}
