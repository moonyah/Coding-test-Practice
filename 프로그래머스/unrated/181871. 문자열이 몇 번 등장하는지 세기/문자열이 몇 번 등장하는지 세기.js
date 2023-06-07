function solution(myString, pat) {
    var count = 0;
    // 1. myString에서 pat이 있는 인덱스를 찾는다
    // 2. 그 인덱스의 글자만 뺀다. 문자열로 변환
    // pat이 없을 때까지(-1) 반복, count++
    while(myString.search(pat) != -1){
        let num = myString.search(pat);
        myString = [...myString].slice(num+1).join('');
        count++;
    }
    return count;
}