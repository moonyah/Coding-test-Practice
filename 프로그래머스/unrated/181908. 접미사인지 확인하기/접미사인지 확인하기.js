function solution(my_string, is_suffix) {
    var answer = 1;
    my_string = [...my_string].reverse();
    is_suffix = [...is_suffix].reverse();
    for(let i = 0; i < is_suffix.length; i++){
       if(my_string[i] !== is_suffix[i]){
           answer = 0;
       } 
    }
    return answer;
}