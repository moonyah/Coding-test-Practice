function solution(lines) {
    var answer = 0;
    let 겹 = [];
    // 겹치는 구간 3개 이하를 구한다.
    // 0, 1
    if(Math.max(lines[0][0],lines[1][0]) < Math.min(lines[0][1], lines[1][1])){
        겹.push([Math.max(lines[0][0],lines[1][0]),Math.min(lines[0][1], lines[1][1])])
    }
    // 0, 2
    if(Math.max(lines[0][0],lines[2][0]) < Math.min(lines[0][1], lines[2][1])){
        겹.push([Math.max(lines[0][0],lines[2][0]),Math.min(lines[0][1], lines[2][1])])
    }
    // 1, 2
    if(Math.max(lines[1][0],lines[2][0]) < Math.min(lines[1][1], lines[2][1])){
        겹.push([Math.max(lines[1][0],lines[2][0]),Math.min(lines[1][1], lines[2][1])])
    }

    console.log(겹)
    
    // 겹치는 구간들의 합집합을 구한다.
    if(겹.length === 0){answer = 0}
    if(겹.length === 1){answer = 겹[0][1] - 겹[0][0]}
    if(겹.length === 2){
        let temp = [];
        if(Math.max(겹[0][0],겹[1][0]) < Math.min(겹[0][1], 겹[1][1])){
        answer = Math.max(겹[0][1], 겹[1][1]) - Math.min(겹[0][0],겹[1][0]),Math.max(겹[0][1], 겹[1][1])
        }else{
            answer = (겹[0][1] - 겹[0][0]) + (겹[1][1] - 겹[1][0])
        }
    }
    if(겹.length === 3){
        answer = Math.max(겹[0][1], 겹[1][1], 겹[2][1])-Math.min(겹[0][0], 겹[1][0], 겹[2][0]);
    }
    
    return answer;
}