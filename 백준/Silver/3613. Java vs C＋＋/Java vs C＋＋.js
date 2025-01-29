let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let str = input[0].trim();

let error = true;

for (let i = 0; i < str.length; i++) {
  let a = str[i].charCodeAt();
  // 95 97~122 65~90
  if (97 > str[0].charCodeAt() || str[0].charCodeAt() > 122) {
    error = true;
    console.log("Error!");
    break;
  }
  if (a == 95 || 97 <= a <= 122 || 65 <= a <= 90) {
    error = false;
  } else {
    error = true;
    console.log("Error!");
    break;
  }
}

if (!error) {
  if (str.includes("_") && str !== str.toLowerCase()) {
    console.log("Error!");
    process.exit(0);
  }
  if (str.includes("_") && str === str.toLowerCase()) {
    // console.log("C++인데 java로 바꿔야 함");
    let arr = [...str.split("_")];
    let error = false;
    for (let i = 1; i < arr.length; i++) {
      if (!arr[i].toUpperCase()) {
        console.log("Error!");
        error = true;
        break;
      }
      let change = arr[i][0].toUpperCase();
      let temp = [...arr[i]];
      temp.shift();
      arr[i] = change + temp.join("");
    }
    if (!error) {
      console.log(arr.join(""));
    }
  } else if (str[0] === str[0].toLowerCase()) {
    // console.log("java인데 C++로 바꿔야 함");
    let changeResult = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        let temp = "_" + str[i].toLowerCase();
        changeResult += temp;
      } else {
        changeResult += str[i];
      }
    }
    console.log(changeResult);
  } else {
    console.log("Error!");
  }
}
