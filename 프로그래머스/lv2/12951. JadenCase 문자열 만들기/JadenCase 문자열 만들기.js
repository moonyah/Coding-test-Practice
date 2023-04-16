function solution(s) {
    var answer = '';
    answer = s.toUpperCase().split(" ");
    var arr = [];
    for(let i = 0; i < answer.length; i++){
        if(i >= 0){
            arr.push(answer[i][0]);
        }
         arr.push(answer[i].toLowerCase().slice(1)); 
    }
    
    var arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(i%2 !== 0 && i !== arr.length-1){
            arr2.push(arr[i]+' ');
        }else{
            arr2.push(arr[i]);
        }
    }
    return arr2.join("");
}