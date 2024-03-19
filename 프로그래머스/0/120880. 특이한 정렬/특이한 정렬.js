function solution(numlist, n) {
    var answer = [];
    numlist.sort((a, b) => Math.abs(b-n) === Math.abs(a-n) ? a-b : Math.abs(b-n) - Math.abs(a-n))     
    return numlist.reverse();
}