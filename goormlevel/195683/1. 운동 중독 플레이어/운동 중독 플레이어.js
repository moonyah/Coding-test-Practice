const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let answer = 0;
rl.on('line', (line) => {
	input = line.split(' ');
	answer = input[0] * (1 + input[1]/30);
	rl.close();
});

rl.on('close', () => {
	console.log(Math.floor(answer));
})