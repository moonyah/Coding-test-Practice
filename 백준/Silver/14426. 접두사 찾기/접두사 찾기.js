class TrieNode {
  constructor() {
    this.children = {}; // 자식 노드 저장 (객체 형태)
    this.isEndOfWord = false; // 단어의 끝 여부
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  // 단어 삽입
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true; // 단어 끝 표시
  }

  // 접두사(prefix) 검색
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);

let trie = new Trie();

for (let i = 1; i < N + 1; i++) {
  let word = input[i].trim();
  trie.insert(word);
}

let answer = 0;
for (let i = N + 1; i < M + N + 1; i++) {
  let curr = input[i].trim();
  if (trie.startsWith(curr)) {
    answer++;
  }
}

console.log(answer);
