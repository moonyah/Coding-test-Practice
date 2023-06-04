function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let sliceStr = intStrs[i].slice(s, s+l);
        if(sliceStr > k){
            answer.push(sliceStr/1);
        }
    }
    return answer;
}