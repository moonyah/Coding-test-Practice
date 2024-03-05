// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	solution(line)
	rl.close();
}).on("close", function() {
	process.exit();
});

const solution = (line) => {
		let arr = line.split(' ');
		let num = 0;
		for(let i of arr){
			if (i.length !== 0){
				num++;
			}
		}
		console.log(num);
}