function solution(my_string, m, c) {
    var answer = '';
    // 1. m개 씩 나눠서 배열에 넣기
    var arr = [];
    for(let i = 0; i < my_string.length/m; i++){
        let temp = [...my_string].slice(i*m, i*m+m);
        arr.push(temp);
    }
    // 2. 배열 요소 하나 하나 마다 c번 째 요소 answer에 추가
    for(let i = 0; i < arr.length; i++){
        answer += arr[i][c-1]; 
    }
    return answer;
}