// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lines = [];
	
	for await (const line of rl) {
		lines.push(line);
		
		if(lines.length === 2){
				const [firstLine, secondLine] = lines;
				solution(firstLine, secondLine)
	      rl.close();
		}
	}
	
	process.exit();
})();

const solution = (firstLine, secondLine) => {
		let arr = firstLine.split(' ');
		let 진우 = Number(arr[0]);
		let 선우 = Number(arr[1]);

		let day = secondLine;
		for(let i = 1; i <= day; i++){
			// i가 홀수인 날은 진우-, 선우+
			// i가 짝수인 날은 진우+, 선우-
			if(i % 2 === 1){
				선우 = 선우 + Math.ceil(진우/2);
				진우 = 진우 - Math.ceil(진우/2);
			}else{
				진우 = 진우 + Math.ceil(선우/2);
				선우 = 선우 - Math.ceil(선우/2);
			}
		}
		console.log(진우, 선우);
}