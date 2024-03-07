// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let inputLine = 3;
	let arr = [];
	
	for await (const line of rl) {
		if(inputLine > 0){
			let temp = line.split(' ').map(a => a/1);
			// console.log(temp)
			arr.push(temp);
			inputLine--;
		}
		if(inputLine === 0){
			solution(arr);
			rl.close();
		}
	}
	
	process.exit();
})();

const solution = (arr) => {
	let answer = 0;
	
	// y/x
	let angle1 = (arr[2][1]-arr[1][1]) / (arr[2][0]-arr[1][0]);
	let angle2 = (arr[1][1]-arr[0][1]) / (arr[1][0]-arr[0][0]);

	if(angle1 === angle2){ // 각도가 같은 경우
		answer = 0;
	}else{ // 각도가 다른 경우 (삼각형이 만들어지는 경우)

		let xArr = [];
		let yArr = [];

		for(let i of arr){
			xArr.push(i[0]);
			yArr.push(i[1]);
		}
		// 신발끈 공식
		answer = Math.abs((xArr[0]*yArr[1] + xArr[1]*yArr[2] + xArr[2]*yArr[0])-(xArr[0]*yArr[2] + xArr[2]*yArr[1] + xArr[1]*yArr[0]))/2
	
	}
	console.log(answer.toFixed(2));
}
