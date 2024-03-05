// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = [];
	for await (const line of rl) {
		arr = line.split(' ');
		solution(arr);
		rl.close();
	}
	
	process.exit();
})();

const solution = (arr) => {
	let [행, 열] = arr;
	let resultArr = [];
	// 열의 개수 대로 #을 넣는다. 
	// 열-1만 .을 넣고 #을 넣는다.
	// 들어간 문자가 '행*열'개일 때까지 넣는다.
	// 열의 개수만큼 씩 출력한다.
	while(resultArr.length < 행*열){
		for(let i = 0; i < 열; i++){
			resultArr.push('#');
		}
		for(let i = 0; i < 열-1; i++){
			resultArr.push('.');
		}
		resultArr.push('#')
		for(let i = 0; i < 열; i++){
			resultArr.push('#');
		}
		resultArr.push('#')
		for(let i = 0; i < 열-1; i++){
			resultArr.push('.');
		}
	}
	resultArr = resultArr.slice(0, 행*열);
	for(let i = 0; i < resultArr.length; i = i + 열/1){
		console.log(resultArr.slice(i, i + 열/1).join(''))
	}
}
