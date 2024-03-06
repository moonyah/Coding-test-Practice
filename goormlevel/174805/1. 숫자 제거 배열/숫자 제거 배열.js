// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let firstReceived = false;
	let num = 0;
	let notIncludeNum = 0;
	let arr = [];

	for await (const line of rl) {
		if(!firstReceived){
			[num, notIncludeNum] = line.split(' ');
			firstReceived = true;
		}else{
			arr = line.split(' ');
			solution(arr, notIncludeNum);
			rl.close();
		}
	}
	
	process.exit();
})();

const solution = (arr, notIncludeNum) => {
	let result = 0;
	for(let i of arr){
		if(!i.includes(notIncludeNum)) result++;
	}
	console.log(result);
}