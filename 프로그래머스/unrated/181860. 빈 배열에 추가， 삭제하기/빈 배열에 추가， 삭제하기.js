function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < flag.length; i++){
        if(flag[i] == true){
            var a = arr[i]*2;
            while(a != 0){
                answer.push(arr[i]);
                a--;
            }
        }else{
            while(arr[i] != 0){
                answer.pop();
                arr[i]--;
            }
        }
    }
    return answer;
}