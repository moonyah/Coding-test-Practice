function solution(polynomial) {
    var answer = '';
    
    let 일차항계수 = 0;
    let 상수항계수 = 0;
    
    let arr = polynomial.split(' ');
    for(let i = 0; i < arr.length; i++){
        if([...arr[i]].includes('x')){
            if(arr[i] === 'x') {일차항계수++}
            else{ 일차항계수 += parseInt(arr[i].slice(0, arr[i].length-1))}
        }
        if(Number(arr[i])){
            상수항계수 += arr[i]/1;
        }
        console.log(일차항계수, 상수항계수)
    }
    
    // 출력
    // 일차항계수가 1보다 큰 경우
    if(일차항계수 > 1){
        answer += `${일차항계수}x`
        
        // 상수항계수가 0보다 큰 경우
        if(상수항계수 > 0){answer += ` + ${상수항계수}`}
    }
    // 일차항계수가 1인 경우
    else if(일차항계수 === 1){answer += `x`     
    
        // 상수항계수가 0보다 큰 경우
        if(상수항계수 > 0){answer += ` + ${상수항계수}`}
    }else{
        
        // 상수항계수가 0보다 큰 경우
        if(상수항계수 > 0){answer += `${상수항계수}`}
    }
        
    return answer;
}