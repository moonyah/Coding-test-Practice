function solution(myStr) {
    var answer = [];
    let arr = myStr.split(/[a-c]/);
    // 공백 없애기
    for(let i of arr){
        if(i !== ''){
            answer.push(i);
        }
    }
    // EMPTY 처리
    if(answer.length === 0){
        answer.push("EMPTY");
    }
    return answer;
}