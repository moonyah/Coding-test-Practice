// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let NReceived = false;
	let N = 0;
	let S
	
	for await (const line of rl) {
		if(!NReceived){
			N = line;
			NReceived = true;
		}else{
			S = line;
			solution(S);
			rl.close();
		}
	}
	
	process.exit();
})();

const solution = (S) => {
	let arr = S.split('');
	let answer = [];
	answer = arr.map(a => a == a.toUpperCase() ? a = a.toLowerCase() : a = a.toUpperCase() );
	console.log(answer.join(''));
}
