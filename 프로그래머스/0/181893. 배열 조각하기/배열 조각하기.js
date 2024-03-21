function solution(arr, query) {
    for(let i = 0; i < query.length; i++){
        if(i % 2 === 0){ // 짝수인 경우
            arr = arr.slice(0, query[i]+1)
        }
        if(i % 2 === 1){ // 홀수인 경우
            arr = arr.slice(query[i])
        }
    }
    return arr;
}