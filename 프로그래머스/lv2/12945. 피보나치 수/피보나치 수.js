function solution(n) {
    var answer = 0;
    // 길이가 n개인 피보나치 수열 만들기
    var arr = [0, 1];
    for(let i = 2; i < n+1; i++){
        arr.push((arr[i-1] + arr[i-2]) % 1234567);
    }
    
    return arr[n];
}