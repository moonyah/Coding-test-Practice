function solution(num, total) {
    var min = Math.ceil(total/num - num/2);
    return new Array(num).fill(0).map((el,i)=>{return i+min;});
}