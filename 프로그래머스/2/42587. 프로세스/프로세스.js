function solution(priorities, location) {
    var answer = 0;
    let Arr = []; // [priorities의 요소, location]
    let reArr = [];
    
    for(let i = 0; i < priorities.length; i++){
        Arr.push([priorities[i], i])
    }
    while(reArr.length < priorities.length){
        for(let i = 0; i < Arr.length; i++){
            if(Arr.filter(a => a[0] > Arr[i][0]).length === 0){
                reArr.push(Arr[i])
                Arr = Arr.filter(a => a[1] !== Arr[i][1])
                i--;
            }
        }
    }
    for(let i = 0; i < reArr.length; i++){
        if(reArr[i][1] === location){
            answer = i+1;
        }
    }

    return answer;
}