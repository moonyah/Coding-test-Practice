let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let S = input;
let arr = [];
let temp = [];
let reversed = true;

for (let i = 0; i < S.length; i++) {
  if (S[i] === "<") {
    // 앞의 단어 마무리
    if (reversed) {
      arr.push(...temp.reverse());
      temp = [];
    }
    temp.push(S[i]);
    reversed = false;
  } else if (S[i] === ">") {
    temp.push(S[i]);
    arr.push(...temp);
    temp = [];
    reversed = true;
  } else if (S[i] === " ") {
    if (reversed) {
      arr.push(...temp.reverse());
      arr.push(" ");
      temp = [];
    } else {
      temp.push(" ");
    }
  } else {
    temp.push(S[i]);
  }
}

// 문자열 끝 처리
if (temp.length > 0) {
  if (reversed) {
    arr.push(...temp.reverse());
  } else {
    arr.push(...temp);
  }
}

console.log(arr.join(""));
