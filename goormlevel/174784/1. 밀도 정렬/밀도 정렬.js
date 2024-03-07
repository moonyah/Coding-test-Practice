// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let totalNumRecevied = false;
	let totalNum = 0;
	let arr = [];
	for await (const line of rl) {

		if(!totalNumRecevied){
			totalNumRecevied = true;
			totalNum = line;
		}else{
			arr.push(line.split(' ').map(a=>a/1));
			totalNum--;
			if(totalNum === 0){
				rl.close();	
			}
		}
	}
	solution(arr);
	process.exit();
})();

		// 무게 부피 주어짐 // 밀도 = 무게 / 부피
		// 1. 밀도가 큰
		// 2. 밀도가 같다면 무게 큰
		// 3. 밀도와 무게 모두 같다면 번호 작은

const solution = (arr) => {
	
	// 밀도가 같은 경우의 인덱스들 무게 비교
	for(let i of arr){ // 인덱스 2는 밀도가 됨
		i.push(i[0]/i[1])
	}
	
	let result = 1;
	let 최대밀도 = arr[0][2];
	let 최대밀도의무게 = arr[0][0];
	
	for(let i = 1; i < arr.length; i++){
		if(최대밀도 < arr[i][2]){ // 밀도 비교
			최대밀도 = arr[i][2];
			result = i+1; // 출력 물질 변경됨
		}else if(최대밀도 === arr[i][2]){ // 밀도가 같을 경우
			if(최대밀도의무게 < arr[i][0]){ // 무게 비교
				최대밀도의무게 = arr[i][0];
				result = i+1;
			}
		}
	}
		console.log(result)
}
