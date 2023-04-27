function solution(arr, queries) {
    var answer = [];
    // 배열 요소 순서 바꾸기
    for(let i = 0; i < queries.length; i++){
        var temp = arr[queries[i][0]];
        arr[queries[i][0]] =  arr[queries[i][1]];
        arr[queries[i][1]] = temp;
    }
    return arr;
}