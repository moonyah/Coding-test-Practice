// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let firstReceived = false;
	let term = 0;
	
	for await (const line of rl) {
		if(!firstReceived){
			firstReceived = true;
			term = line.split(' ')[1]
		}else{
			solution(line, term);
			rl.close();
		}
	}
	
	process.exit();
})();

const solution = (line, term) => {
	let rest = [];
	let arr = line.split(' ').map(a=>parseInt(a));
	for(let i = arr.length-1; i > 0; i--){
		if(arr[i] - arr[i-1] > term){
			rest = arr.slice(i); 
			break;
		}
	}
	if(rest.length === 0){
		rest = arr;
	}
	console.log(rest.length)
}
