function solution(a, b) {
    let answer = 1;
    // 기약 분수로 나타내기 // 최대공약수로 약분을 한다
    
    // 최대공약수 찾는 방법
    // 그냥 약수를 찾는 방법
    // 소수로 나눈다
    // 그 값보다 이하인 소수를 찾는 방법
    
    for(let i = 2; i < Math.max(a, b); i++){
        // 소수는 1과 자기 자신으로만 나눠짐
        // a/i 했을 때 자연수인 값이 있다면?
        // a%i했을 때 나머지가 0인 값이 있다면? 1과 자기 자신을 제외한
        if(a%i === 0 && b%i === 0){
            console.log("소수가 아닙니다.", i);
            a = Math.floor(a/i);
            b = Math.floor(b/i);
            console.log(a, b);
        }
    }
    
    // 분모 소인수 분해하기
    for(let i = 2; i <= b; i++){
        if(b%i === 0 && i%2 !== 0 && i%5 !== 0){
            console.log(i, "무한소수");
            answer = 2; break;
        }
    }
    return answer;
}