let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 0; j < N - i; j++) {
        line += " ";
    }
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

for (let i = N - 1; i >= 1; i--) {
    let line = "";
    for (let j = 0; j < N - i; j++) {
        line += " ";
    }
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}
