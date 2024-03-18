function solution(n) {
    var answer = 1;
    let arr = [];
    let i = 0;
    while(arr.length < n){
        i++;
        if(!i.toString().split('').includes('3') && (i%3 !==0)){
            arr.push(i);
        }
    }
    return arr[arr.length-1];
}