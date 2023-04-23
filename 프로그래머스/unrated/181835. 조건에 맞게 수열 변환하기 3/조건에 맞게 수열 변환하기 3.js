function solution(arr, k) {
    var answer = [];
    if(k%2 == 1){
        answer = arr.map(a=>a*k);
    }else{
        answer = arr.map(a=>a+k);
    }
    return answer;
}