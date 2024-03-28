function solution(n) {
    
    // 0으로 초기화를 한다.
    var answer = [];
    for(let i = 0; i < n; i++){
        answer.push(Array(n).fill(0))
    }
    
    // 첫 껍데기 양방향에 위치한 거 합 (n, n) 값의 2배
    // 두 번째 양방향에 위치한 거 합 (n-1, n-1) 값의 2배
    
    // [0, 0] [1, 1] [2, 2] [3, 3] [4, 4]만 구하면 됨
    // 1, 1 +4(n-1), 1 +4(n-1) +4(n-2)... // 껍데기의 위 왼쪽 편의 값
    // 1+2(n-1), 1+2(n-1) +2(n-1)+2(n-2), ... // 껍데기의 아래 오른쪽 편의 값
    
    
    answer[n-1][n-1] = 1+2*(n-1); // 첫 껍데기 아래 오른쪽 기준점
    for(let i = 0; i < n; i++){
        answer[i][n-1] = n+i; // 첫 껍데기 오른쪽
        answer[n-1][i] = 2*(answer[n-1][n-1]) - answer[i][n-1]; // 첫 껍데기 아래쪽
    }
    // (첫 껍데기 제외한 나머지 오른쪽, 아래쪽 구하기)
    for(let i = 1; i < Math.ceil(n/2); i++){                                                               
        answer[n-1-i][n-1-i] = answer[n-i][n-i] + (n-(2*i-1)) +2*(n-(2*i-1)-1) + (n-(2*i-1)-2); // 모든 껍데기 아래 오른쪽 기준점
        for(let j = 1; j < n-(2*i); j++){
            answer[n-1-i-j][n-1-i] = answer[n-1-i][n-1-i]-j; // 모든 껍데기 오른쪽
            answer[n-1-i][n-1-i-j] = 2*(answer[n-1-i][n-1-i])-answer[n-1-i-j][n-1-i]; // 모든 껍데기 아래쪽
        }
    }
    console.log(answer)
    
    answer[0][0] = 1; // 첫 껍데기 위 왼쪽 기준점
    for(let i = 0; i < n; i++){
        answer[0][i] = i+1; // 첫 껍데기 위쪽
        if(i>0){
            answer[i][0] = 2*answer[n-1][n-1]-answer[0][i]; // 첫 껍데기 왼쪽
        }
    }
    
    // (첫 껍데기 제외한 나머지 위쪽, 왼쪽 구하기)
    for(let i = 1; i < Math.ceil(n/2); i++){
        answer[i][i] = answer[i-1][i-1] + 4*(n-(2*i-1)); // 모든 껍데기 위 왼쪽 기준점
        // answer[i][i] + 2*(n-(2*i-1) => 각 껍데기의 오른쪽 아래
        for(let j = 1; j < n-(2*i); j++){
            answer[i][i+j] = answer[i][i]+j; // 모든 껍데기 위쪽
            answer[i+j][i] = 2*(answer[i][i] + 2*(n-(2*i+1))) - answer[i][i+j]; // 모든 껍데기 왼쪽
        }
    }
    
    return answer;
}