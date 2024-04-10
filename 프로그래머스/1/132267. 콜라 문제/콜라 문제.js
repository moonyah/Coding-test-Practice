function solution(a, b, n) {
    var answer = 0;
    // 마트에 주어야 하는 병 수 a
    // a개를 가져다 주면 마트가 주는 콜라 병 수 b
    // 상민이가 가지고 있는 빈 병의 개수 n
    
    let NdivideA = 0;
    
    while(n >= a){ 
        NdivideA = Math.floor(n/a);
        answer += b * NdivideA;
        n = (n - a * NdivideA) + (b * NdivideA);
    }
    
    return answer;
}