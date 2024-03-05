// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	solution(line);
	rl.close();
}).on("close", function() {
	process.exit();
});

const solution = (line) => {
	let num1 = 0;
	let num2 = 0;
	let num3 = 0;
	let num4 = 0;

	for(let i of line){
		if(i === '1') num1++;
		if(i === 'I') num2++;
		if(i === 'l') num3++;
		if(i === '|') num4++;
	}
	
	let arr = [num1, num2, num3, num4];
	for(let i of arr){
		console.log(i);
	}
}