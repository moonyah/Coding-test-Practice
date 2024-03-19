function solution(code) {
    var ret = '';
    let mode = 0;
    // 시작 모드 0
    // return 하려는 ret가 만약 빈 문자열이라면 "EMPTY"를 return 
    // 모드 0 : code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가
    // 모드 1 : code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가
    
    for(let idx = 0; idx < code.length; idx++){
        if(mode === 0){
            if(code[idx] != 1 && idx % 2 === 0){
                ret += code[idx]
            }
        }else{
            if(code[idx] != 1 && idx % 2 === 1){
                ret += code[idx]
            }
        }
        if(code[idx] == 1){
            mode === 1 ? mode = 0 : mode = 1;
        }
    }
    
    return ret = ret.length === 0 ? "EMPTY" : ret;
}