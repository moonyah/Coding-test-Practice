function solution(numbers) {
    var answer = [];
    for(let i =  0; i < numbers.length; i++){
        let num = numbers[i];
        for(let j = i+1; j < numbers.length; j++){
            if(!answer.includes(num + numbers[j])){
                answer.push(num + numbers[j]);
            }
        }
    }
    return answer.sort((a, b) => a-b);
}