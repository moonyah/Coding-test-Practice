const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstInputReceived = false;
let firstInput;
let input = [];

rl.on('line', (line) => {
    if (!firstInputReceived) { // 첫 번째가 아직 false이면
        firstInput = parseInt(line) + 1; // 시간까지 포함해서 입력 받을 것
        firstInputReceived = true;
    } else {
        input.push(line);
        firstInput--;
        if (firstInput === 0) {
						solution(input);
            rl.close();
        }
    }
});

rl.on('close', () => {
});

const solution = (input) => {
	let 시간 = input[0];
	let totalTime = input.slice(1).reduce((a, b)=>parseInt(a)+parseInt(b));
	
	// 최종 시간 구하기
	let [시, 분] = 시간.split(' ').map(a => a = parseInt(a));
	
	let 더할시간 = Math.floor((분 + totalTime) / 60);
	분 = 분 + totalTime - 더할시간*60;
	시 = (시+더할시간) % 24

	console.log(시, 분)
}
