function solution(s) {
    var answer = [];
    let temp = [];
    for(let i = 0; i < s.length; i++){
        if(!temp.includes(s[i])){
            answer.push(-1);
            temp.push(s[i]);
        }else{ // 만약 있다면
            // 같은 문자이면 값을 abs(s[i] - 인덱스)로 변경한다.
            let arr = [...s].slice(0, i).map((a, b)=>a===s[i] ? a = Math.abs(b-i) : a = 10000)
            answer.push(Math.min(...arr))
        }
    }
    return answer;
}