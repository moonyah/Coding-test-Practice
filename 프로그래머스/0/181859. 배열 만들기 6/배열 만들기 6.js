function solution(arr) {
    var answer = [];
    let i = 0;
    let stk = []
    while(i < arr.length){
        if(stk.length == 0 || (stk.length !== 0 && stk[stk.length-1] !== arr[i])){
            stk.push(arr[i]);
            i++;
        }
        if(stk.length !== 0 && stk[stk.length-1] == arr[i]){
            stk.pop();
            i++;
        }
    }
    return stk.length == 0 ? [-1] : stk;
}