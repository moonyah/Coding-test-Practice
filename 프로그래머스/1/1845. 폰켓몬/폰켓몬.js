function solution(nums) {
    var answer = [];
    for(let i of nums){
        if(!answer.includes(i)){
            answer.push(i);
        }
    }
    return answer.length > Math.floor(nums.length/2) ? Math.floor(nums.length/2) : answer.length;
}