function solution(num_list) {
    var answer = -1;
    for(let i of num_list){
        if(i < 0){
            answer = num_list.indexOf(i);
            break;
        }
    }
    return answer;
}