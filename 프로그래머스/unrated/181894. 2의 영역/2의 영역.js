function solution(arr) {
    let startIndex = arr.indexOf(2);
    let endIndex = arr.lastIndexOf(2);
    return startIndex === -1 ? [-1] : arr.slice(startIndex, endIndex+1);
}