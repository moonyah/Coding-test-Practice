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
	let arr = line.split(' ');
	// 1은 가위, 2는 바위, 3은 보
	// 승리하는 사람들의 수 구하기
	let set = new Set(arr)
	if(set.size === 3 || set.size === 1){
		console.log(0);
	}else{ // 승부가 나는 경우
		let tempArr = [...set].map(a => a/1);
		if(tempArr.includes(1) && tempArr.includes(3)){
			console.log(arr.filter(a=>a == 1).length)
		}else if(tempArr.includes(1) && tempArr.includes(2)){
			console.log(arr.filter(a=>a == 2).length)
		}else{
			console.log(arr.filter(a=>a == 3).length)
		}
	}
}