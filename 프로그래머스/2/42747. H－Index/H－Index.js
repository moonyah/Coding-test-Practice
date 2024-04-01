function solution(citations) {
    var answer = 0;
    let maxH = citations.sort((a, b) => b - a)[0]; // 오름차순으로 정렬이 되었다.
    let H이상Arr = [];
    let H미만Arr = [];
    for(let i = maxH; i >= 0; i--){ // H
        H이상Arr = [];
        H미만Arr = [];
        for(let j = 0; j < citations.length; j++){
            if(citations[j] >= i){
                H이상Arr.push(citations[j]);
            }else{
                H미만Arr.push(citations[j]);
            }
        }
        if(H이상Arr.length >= i && H미만Arr.length <= i){
            return i;
        }
    }
}