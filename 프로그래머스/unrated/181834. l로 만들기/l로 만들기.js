function solution(myString) {
    var answer = '';
    // 아스키 코드로 바꿔서 l보다 더 낮은 것만 ㄱㄱ
    for(let i = 0; i < myString.length; i++){
        if(myString.charCodeAt(i) > 108){
            answer += myString[i];
        }else{
            answer += "l";
        }
    }
    return answer;
}