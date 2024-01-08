function solution(strArr) {    
    let frequency = {}; // 객체 생성
    let arr = strArr.map(a => a = a.length);
    
    let maxFrequency = 0; // 갱신되는 값
    
    arr.forEach ((num)=>{
        frequency[num] = (frequency[num] || 0) + 1;
        
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      }
    })
    
    return maxFrequency;
}