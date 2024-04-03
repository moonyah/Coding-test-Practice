function solution(numbers) {
    var answer = 0;
    let numbersArr = numbers.split('');
    // 소수에서 판단
    let maxNum = numbersArr.sort((a, b) => b - a).join('');
    let 소수Arr = [];
    let temp = [];
    for(let i = 2; i <= maxNum; i++){
        temp = [];
        let n의제곱근 = Math.floor(Math.sqrt(i));
        for(let j = 2; j <= n의제곱근; j++){
            if(i % j === 0){
                temp.push(j);
            }
            if(temp.length > 0){
                break;
            }
        }
        if(temp.length === 0){
            소수Arr.push(i)
        }
    }
    console.log(소수Arr)
    
    let temp2 = [];
    let copynumbersArr = [];
    let iArr = [];
    // 소수Arr의 요소들을 numbers조각으로 만들 수 있는지 판단하기
    for(let i of 소수Arr){
        copynumbersArr = [...numbersArr];
        iArr = i.toString().split('');
        for(let j of iArr){
            if(copynumbersArr.includes(j)){     
                copynumbersArr = copynumbersArr.filter((a, b) => b !== copynumbersArr.indexOf(j));
                iArr = iArr.filter((a, b) => b !== iArr.indexOf(j));
                if(iArr.length === 0){
                    answer++;
                }
            }else{
                break;
            }
        }
    }
    
    return answer;
}