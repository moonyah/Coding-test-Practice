const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let firstReceived = false;
let firstNum = 0;

rl.on('line', (line) => {
	if(!firstReceived){
		firstNum = line;
		firstReceived = true;
	}else{
			firstNum--;
			input.push(line);
			if(firstNum === 0){
				solution(input);
				rl.close();
			} 
	}
});

rl.on('close', () => {
})

const solution = (input) => {
	let result = 0;
	for(let i of input){
		let arr = i.split(' ');
		
		if(arr[1] == '+') result = result + parseInt(arr[0])+parseInt(arr[2]);
		if(arr[1] == '-') result = result + parseInt(arr[0])-parseInt(arr[2]);
		if(arr[1] == '*') result = result + parseInt(arr[0])*parseInt(arr[2]);
		if(arr[1] == '/') result = result + Math.floor(parseInt(arr[0])/parseInt(arr[2]));
		
	}
	console.log(result);
}