function solution(my_string, s, e) {
    var answer = '';
    var temp = my_string.slice(s, e+1).split('').reverse().join('');
    answer = my_string.slice(0, s) + temp + my_string.slice(e+1);
    return answer;
}