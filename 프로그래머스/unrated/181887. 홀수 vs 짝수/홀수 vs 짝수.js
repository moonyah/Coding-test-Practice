function solution(num_list) {
    var answer = 0;
    var sumOddIndex = 0;
    var sumEvenIndex = 0;
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 == 1){
            sumOddIndex += num_list[i];
        }else{
            sumEvenIndex += num_list[i];
        }
    }
    return answer = sumOddIndex > sumEvenIndex ? sumOddIndex: sumEvenIndex;
}