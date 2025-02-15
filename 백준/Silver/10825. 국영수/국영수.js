let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let list = [];
for (let i = 1; i <= N; i++) {
  let [name, 국, 영, 수] = input[i].trim().split(" ");
  list.push([name, Number(국), Number(영), Number(수)]);
}
list.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else if (a[2] !== b[2]) {
    return a[2] - b[2];
  } else if (a[3] !== b[3]) {
    return b[3] - a[3];
  } else {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  }
});
list.map((a) => console.log(a[0]));
