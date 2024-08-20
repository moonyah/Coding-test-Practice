const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");
const data = input[0].trim().split(" ").join("");
if (data === "12345678") {
  console.log("ascending");
} else if (data === "87654321") {
  console.log("descending");
} else {
  console.log("mixed");
}