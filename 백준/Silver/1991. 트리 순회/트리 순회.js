let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let map = new Map();
for (let i = 1; i < N + 1; i++) {
  let [parent, left, right] = input[i].trim().split(" ");
  map[parent] = [left, right];
}
// 전위 부모>왼쪽>오른쪽
let preOrderAnswer = "";
function preOrder(node) {
  preOrderAnswer += node;
  if (map[node][0] !== ".") {
    preOrder(map[node][0]);
  }
  if (map[node][1] !== ".") {
    preOrder(map[node][1]);
  }
}
preOrder("A");
console.log(preOrderAnswer);

// 중위 왼쪽>부모>오른쪽
let inOrderAnswer = "";
function inOrder(node) {
  if (map[node][0] !== ".") {
    inOrder(map[node][0]);
  }
  inOrderAnswer += node;
  if (map[node][1] !== ".") {
    inOrder(map[node][1]);
  }
}
inOrder("A");
console.log(inOrderAnswer);

// 후위 오른쪽>왼쪽>오른쪽>부모
let postOrderAnswer = "";
function postOrder(node) {
  if (map[node][0] !== ".") {
    postOrder(map[node][0]);
  }
  if (map[node][1] !== ".") {
    postOrder(map[node][1]);
  }
  postOrderAnswer += node;
}
postOrder("A");
console.log(postOrderAnswer);
