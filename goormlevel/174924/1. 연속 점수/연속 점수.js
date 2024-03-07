// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let firstReceived = false;
	let totalNum = 0;
	
	for await (const line of rl) {
		if(!firstReceived){
			totalNum = line;
			firstReceived = true;
		}else{
			solution(line);
			rl.close();
		}
	}
	
	process.exit();
})();

const solution = (line) => {
	let arr = line.split(' ').map(a=>a/1);
	// 연속된 수면 따로 slice해서 합을 내어서 새로운 배열에 추가
	let tempArr = [arr[0]];
	let result = [arr[0]];
	for(let i = 0; i < arr.length-1; i++){
		if(arr[i]+1 === arr[i+1]){
			tempArr.push(arr[i+1]);
		}else{
			tempArr = [arr[i+1]];
		}
		let subtotal = tempArr.reduce((a, b)=> a+b);
		result.push(subtotal);
	}
	// console.log(result)
	console.log(Math.max(...result))
}
