function solution(myString) {
    var answer = '';
    for(let i of myString){
        if(i == "a"||i == "A"){
            answer += i.toUpperCase();
        }else{
            answer += i.toLowerCase();
        }
    }
    return answer;
}