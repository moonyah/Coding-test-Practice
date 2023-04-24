function solution(num_list) {
    var linkOdd = '';
    var linkEven = '';
    for(let i of num_list){
        if(i % 2 == 1){
            linkOdd += i;
        }else{
            linkEven += i;
        }
    }
    return +linkOdd + +linkEven;
}