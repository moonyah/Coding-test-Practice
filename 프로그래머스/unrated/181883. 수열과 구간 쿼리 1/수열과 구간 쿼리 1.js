function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length;i++){
        let s = queries[i][0];
        let e = queries[i][1];
        for(let j = s; j <= e; j++){
            arr[j] += 1;
        }
    }
    return arr;
}