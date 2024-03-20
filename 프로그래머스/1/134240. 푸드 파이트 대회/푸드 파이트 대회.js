function solution(food) {
    var answer = '';
    // 1223330333221 1번 1개 남음
    // [물, 1번 음식 수, 2번 음식 수, 3번 음식 수, ...]
    // 2 ≤ food의 길이 ≤ 9
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
            answer += i;
        }
    }
    let str = [...answer, "0"];
    let reversestr = [...answer].reverse();
    
    return [...str, ...reversestr].join('');
}