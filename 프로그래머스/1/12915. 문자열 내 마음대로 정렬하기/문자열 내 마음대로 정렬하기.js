function solution(strings, n) {
    var answer = [];
    // n번 째 인수가 같으면 사전처럼 비교하기
    
    // 사전처럼 비교하는 방법
    // 만약에 글자가 둘 다 있다면 비교
    // 만약에 글자가 하나가 더 이상 없으면 더 있는 것을 사전에서 뒷 순서이다.
    const dictionary = (a, b) =>{
        for(let i = 0; i < Math.min(a.length, b.length); i++){
            if(a[i].charCodeAt() > b[i].charCodeAt()){
                return 1;
            }
            if(a[i].charCodeAt() < b[i].charCodeAt()){
                return -1;
            }
        }    
    }
    
    strings.sort((a, b) => a[n].charCodeAt() === b[n].charCodeAt() ? dictionary(a, b) : a[n].charCodeAt() - b[n].charCodeAt());
    
    return strings;
}