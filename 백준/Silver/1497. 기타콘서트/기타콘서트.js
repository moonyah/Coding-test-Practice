let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
// console.log(N, M); // 기타 수, 곡 수
let guitarAndSongs = [];
for (let i = 1; i <= N; i++) {
  let [guitar, songs] = input[i].trim().split(" ");
  let bit = 0n; // BigInt 사용
  for (let j = 0; j < M; j++) {
    if (songs[M - j - 1] === "Y") {
      bit |= 1n << BigInt(j);
    }
  }
  // console.log(bit.toString(2));
  guitarAndSongs.push(bit);
}

let maxSongCount = 0;
let minGuitarCount = Infinity;
for (let i = 0; i < 1 << N; i++) {
  let bitSet = 0n;
  let guitarCount = 0;
  for (let j = 0; j < N; j++) {
    if (i & (1 << j)) {
      bitSet |= guitarAndSongs[j];
      guitarCount++;
    }
  }
  let songCount = [...bitSet.toString(2)].filter((a) => a === "1").length;
  // console.log("songCount", songCount);
  if (songCount > maxSongCount) {
    maxSongCount = songCount;
    minGuitarCount = guitarCount;
  } else if (songCount === maxSongCount) {
    minGuitarCount = Math.min(minGuitarCount, guitarCount);
  }
}

let result = -1;
if (maxSongCount > 0) {
  result = minGuitarCount;
}
console.log(result);
