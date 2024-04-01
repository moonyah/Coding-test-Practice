function solution(answers) {
    var answer = [];
    // 1번 수포자 1, 2, 3, 4, 5를 반복해서 찍는다.
    let Arr1 = [1, 2, 3, 4, 5];
    let Arr1Correct = 0;
    // 2번 수포자  2, 1, 2, 3, 2, 4, 2, 5를 반복해서 찍는다.
    let Arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let Arr2Correct = 0;
    // 3번 수포자 3, 3, 1, 1, 2, 2, 4, 4, 5, 5를 반복해서 찍는다.
    let Arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let Arr3Correct = 0;
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === Arr1[i % Arr1.length]){
            Arr1Correct++;
        }
        if(answers[i] === Arr2[i % Arr2.length]){
            Arr2Correct++;
        }
        if(answers[i] === Arr3[i % Arr3.length]){
            Arr3Correct++;
        }
    }
    
    let 채점표 = [Arr1Correct, Arr2Correct, Arr3Correct];
    for(let i = 0; i < 채점표.length; i++){
        if(채점표[i] === Math.max(...채점표)){
            answer.push(i+1);
        }
    }
    
    return answer;
}