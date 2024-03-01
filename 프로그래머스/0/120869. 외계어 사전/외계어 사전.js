function solution(spell, dic) {
    var answer = 2;
    for(let i of dic){
        if(JSON.stringify([...i].sort()) == JSON.stringify(spell.sort())){
            answer = 1; break;
            console.log("이거 실행")
        }else{
            answer = 2;
        }
    }
    return answer;
}