function solution(arr) {
    let answer = 0;
    let beforeArr = [...arr]
    let re = true;
    
    do{
        for(let i in arr){ // 1회 차
            arr[i] >= 50 && arr[i] % 2 == 0 ?  arr[i] /= 2 : arr[i] < 50 && arr[i] % 2 == 1 ? arr[i] = arr[i]*2+1 : arr[i];
    }
        JSON.stringify(arr) === JSON.stringify(beforeArr) ? re = false : answer++;
        beforeArr = [...arr];

    }while(re)
        
    return answer;
                
}