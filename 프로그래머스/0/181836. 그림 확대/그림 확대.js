function solution(picture, k) {
    var answer = [];
    for(let i of picture){
        let el = [...i].map(i => i = Array(k).fill(i).join('')).join('')
        for(let j = 0; j < k; j++){
            answer.push(el)
        }
    }
    return answer;
}