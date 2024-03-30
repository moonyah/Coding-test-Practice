function solution(clothes) {
    var answer = 0;
    const obj = {};
    clothes.forEach(([tag, name]) => {obj[name] = (obj[name] || 0) + 1})
    // 1개 착용하는 경우 : 1종류 하나 씩 꺼내기 // clothes.length
    // 2개 착용하는 경우 : 2종류 하나 씩 꺼내기 // Object.values(obj) 배열에서 2개 씩 뽑아서 더하는 경우의 수
    // 3개 착용하는 경우 : 3종류 하나 씩 꺼내기 // Object.values(obj) 배열에서 3개 씩 뽑아서 더하는 경우의 수
    // ...
    // n개 착용하는 경우 : n종류 하나 씩 꺼내기
    // n의 범위 1 ~ Object.values(obj).length
    
    let valuesArr = Object.values(obj);
    let n = Object.values(obj).length;
    
    let tempArr = [valuesArr.reduce((a, b)=> a+b)];
    
    return valuesArr.map(a => a+1).reduce((a, b)=> a*b)-1;
}