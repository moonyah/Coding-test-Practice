function solution(myString, pat) {
    // 마지막 index 찾기
    let lastIndex = myString.lastIndexOf(pat);
    
    return myString.slice(0,lastIndex+pat.length);
}