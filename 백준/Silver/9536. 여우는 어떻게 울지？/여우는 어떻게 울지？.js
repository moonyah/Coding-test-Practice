const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = Number(input[0]);

let i = 1;
let t = 0;
let record = [];
while (true) {
  if (!input[i]) break;
  let line = input[i].trim();
  if (line === "what does the fox say?") {
    fox(record);
    record = [];
    t++;
  } else {
    record.push(line);
  }
  i++;
}

function fox(record) {
  let totalRecord = record[0].split(" ");
  let otherAnimal = record.slice(1);
  let otherAnimalRecord = new Set();
  for (let i of otherAnimal) {
    let record = i.split(" ").slice(-1);
    otherAnimalRecord.add(...record);
  }
  let foxSays = [];
  for (let i of totalRecord) {
    if (!otherAnimalRecord.has(i)) {
      foxSays.push(i);
    }
  }
  console.log(foxSays.join(" "));
}
