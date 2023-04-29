function solution(s) {
    var answer = [0, 0];
    // s를 이진 변환 한다.
    // 이진 변환 결과가 1이 될 때까지 반복
    
    // 이진 변환를 하면서 없앤 0의 개수를 세야 한다.
    // 이진 변환을 몇 번 했는지 개수를 세야 한다.
    // s를 이진법으로 변환하는 코드
    while(s > 1){
        answer[1] += s.length - s.split('0').join('').length;
        s = s.split('0').join('').length;
        s = s.toString(2);
        answer[0]++;
    }

    
    return answer;
}