function solution(my_string, indices) {
    for(let i = 0 ; i < indices.length; i++){
        my_string = my_string.slice(0, indices[i])+" "+my_string.slice(indices[i]+1);
    }
    var arr = my_string.split("");
    var answer = '';
    for(let i of arr){
        if(i !== " "){
            answer += i;
        }
    }
    return answer;
}