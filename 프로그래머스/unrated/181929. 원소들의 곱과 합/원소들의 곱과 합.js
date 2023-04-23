function solution(num_list) {
    var temp = num_list.reduce((a, b)=>a*b);
    var temp2 = num_list.reduce((a, b)=>a+b);
    return temp < temp2*temp2 ? 1:0;
}