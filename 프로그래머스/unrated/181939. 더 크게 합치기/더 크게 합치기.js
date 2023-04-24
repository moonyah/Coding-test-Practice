function solution(a, b) {
    var answer = 0;
    a = a.toString();
    b = b.toString();
    if(a+b > b+a){
        answer = a+b;
    }else{
        answer = b+a;
    }
    return +answer;
}