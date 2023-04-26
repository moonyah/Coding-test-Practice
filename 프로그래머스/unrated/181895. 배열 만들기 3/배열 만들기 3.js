function solution(arr, intervals) {
    var answer = [];
    var answer1 = arr.slice(intervals[0][0], intervals[0][1]+1);
    var answer2 = arr.slice(intervals[1][0], intervals[1][1]+1);
    for(let i = 0; i < answer1.length; i++){
        answer.push(answer1[i]);
    }
    for(let i = 0; i < answer2.length; i++){
        answer.push(answer2[i]);
    }
    return answer;
}