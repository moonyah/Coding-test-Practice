function solution(quiz) {
    let answer = [];
    var arr = [];
    for(let i of quiz){
        arr.push(i.split(' '))
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i][1] === "-"){
            if(arr[i][0]/1 - arr[i][2]/1 === arr[i][4]/1){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
        if(arr[i][1] === "+"){
            if(arr[i][0]/1 + arr[i][2]/1 === arr[i][4]/1){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
    }
    
    
    return answer;
}