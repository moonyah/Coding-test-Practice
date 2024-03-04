function solution(rank, attendance) {
    var answer = 0;
    let abcArr = [];
    let chance = 1;
    while(abcArr.length < 3){
        if(attendance[rank.indexOf(chance)] === true){
            abcArr.push(rank.indexOf(chance));
        }
        chance++;
    }
    let [a, b, c] = abcArr
    return 10000*a+100*b+c;
}