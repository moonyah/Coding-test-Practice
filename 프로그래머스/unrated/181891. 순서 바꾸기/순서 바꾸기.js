function solution(num_list, n) {
    var answer = [];
    var answer1 = num_list.slice(n, num_list.length);
    var answer2 = num_list.slice(0, n);
    for(let i of answer1){
        answer.push(i);
    }
    for(let i of answer2){
        answer.push(i);
    }
    return answer;
}