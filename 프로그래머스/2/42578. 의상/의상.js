function solution(clothes) {
    const obj = {};
    clothes.forEach(([tag, name]) => {obj[name] = (obj[name] || 0) + 1})
    let valuesArr = Object.values(obj);
    return valuesArr.map(a => a+1).reduce((a, b)=> a*b)-1;
}