function solution(number, k) {
    var answer = '';
    let returnLen = number.length - k;
    let rangeStartIdx = 0;
    let rangeEndIdx = number.length - returnLen;
    let numberArr = number.split('').map(Number);
    while(answer.length < returnLen){
        // console.log("현재 범위", numberArr[rangeStartIdx], numberArr[rangeEndIdx])
        let maxIdx = 0;
        let max = -1;
        for(let i = rangeStartIdx; i <= rangeEndIdx; i++){
            if(max < numberArr[i]){
                max = numberArr[i];
                maxIdx = i;
            }
        }
        // console.log(max, maxIdx);
        answer += numberArr[maxIdx];
        rangeStartIdx = maxIdx + 1;
        rangeEndIdx++;
    }
    return answer;
}