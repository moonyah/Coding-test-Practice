// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let firstReceived = false;
	let lineNum = 0;
	let arr = [];
	for await (const line of rl) {
		if(!firstReceived){
			lineNum = line;
			firstReceived = true;
		}else{
				arr.push(line);
				lineNum--;
			if(lineNum === 0){
				solution(arr);
				rl.close();
			}
		}
	}
	
	process.exit();
})();

const solution = (arr) => {
	let fixedArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	for(let i of arr){
		let eachEl = i.split('').filter(a=> fixedArr.includes(a));
		console.log(eachEl.join('').length === 0 ? '???' : eachEl.join(''))
	}
}