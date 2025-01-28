const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let S = input[0].trim().split("");
let P = input[1].trim().split("");

function computeLPSArray(pattern) {
  let lps = Array(pattern.length).fill(0);
  let len = 0; // 현재까지 일치한 접두사와 접미사의 길이
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len; // LPS 배열에 현재 길이 저장
      i++; // 다음 문자로 이동
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        // 일치하지 않고 len이 0이고
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
computeLPSArray(P);

function KMPSearch(S, P) {
  const N = S.length; // 텍스트의 길이
  const M = P.length; // 패턴의 길이
  const lps = computeLPSArray(P);
  let i = 0;
  let j = 0;
  let result = 0;

  while (i < N) {
    if (S[i] === P[j]) {
      i++;
      j++;
    }

    if (j === M) {
      // 패턴 발견
      result = 1;
      break;
    } else if (i < N && S[i] !== P[j]) {
      // 불일치
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++; // j가 0이면 i 증가
      }
    }
  }
  return result;
}

console.log(KMPSearch(S, P));
