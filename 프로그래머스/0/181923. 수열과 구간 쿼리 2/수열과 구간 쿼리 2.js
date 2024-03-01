function solution(arr, queries) {
    var answer = [];
    let tempArr = []
    for(let i in queries){
        let [s, e, k] = queries[i];
        // tempArr = arr.slice(s, e+1).filter(a => a > k).sort(); // 정렬 기본 조건은 문자열 비교로 문자열이 아닌 경우, 문자열로 만들어서 비교한다.
        tempArr = arr.slice(s, e+1).filter(a => a > k)
        let min = Math.min(...tempArr)
        if(tempArr.length == 0){
            answer.push(-1)
        }else{
            answer.push(min)
        }
    }
    return answer;
}