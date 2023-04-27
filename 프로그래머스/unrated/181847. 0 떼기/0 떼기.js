function solution(n_str) {
    var arr = n_str.split('');
    for(let i = 0; i < arr.length+2; i++){
        if(arr[0] == 0){
            arr.shift();
        }
    }
    return arr.join('');
}