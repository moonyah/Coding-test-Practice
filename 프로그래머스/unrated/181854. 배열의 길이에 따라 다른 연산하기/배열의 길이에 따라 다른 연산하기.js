function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 == 1){
        answer = arr.map((v, i) => i%2 == 0 ? v+n: v);
    }else{
        answer = arr.map((v, i) => i%2 == 1 ? v+n: v);
    }
    return answer;
}