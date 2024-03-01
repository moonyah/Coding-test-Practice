function solution(dots) {
    var answer = 0;
    let arr = []; 
    for(let i of dots){
        i = i.reduce((a, b)=> a+b);
        arr.push(i);
    }
    let smallIndex = arr.indexOf(Math.min(...arr))
    let bigIndex = arr.indexOf(Math.max(...arr))
    answer = (dots[bigIndex][0]-dots[smallIndex][0])*(dots[bigIndex][1]-dots[smallIndex][1])
    return answer;
}