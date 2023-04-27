function solution(arr, delete_list) {
    var answer = [];
    // 1. arr 하나씩 delete_list에 없으면 result에 추가
    for(let i = 0; i < arr.length; i++){
        if(delete_list.includes(arr[i]) == false){
            answer.push(arr[i]);
        }
    }
    return answer;
}