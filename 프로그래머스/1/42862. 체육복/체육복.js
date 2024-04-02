function solution(n, lost, reserve) {
    var answer = 0; // 체육수업을 들을 수 있는 학생의 최댓값
    // 전체 학생 수 n, 도난 학생 번호 lost, 여벌 체육복 학생 번호 reserve
    // 여벌 체육복 학생이 도난 당했을 경우 빌려 줄 수 없음
    var arr = Array(n).fill(1);
    for(let i of lost){
        arr[i-1] -= 1;
    }
    for(let i of reserve){
        arr[i-1] += 1;
    }
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        if(i === arr.indexOf(2) && (arr[i] === 2) && arr[i-1] === 0){
               arr[i] -= 1;
                arr[i-1] += 1; 
        }
        if(i === arr.indexOf(2) && (arr[i] === 2) && arr[i+1] === 0){
               arr[i] -= 1;
                arr[i+1] += 1; 
        }
        if(i === arr.lastIndexOf(2) && (arr[i] === 2) && arr[i-1] === 0){
               arr[i] -= 1;
                arr[i-1] += 1; 
        }
         if(i === arr.lastIndexOf(2) && (arr[i] === 2) && arr[i+1] === 0){
               arr[i] -= 1;
                arr[i+1] += 1; 
        }
        console.log(arr)
    }


   for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0 && (arr[i-1] > 0) && arr[i-1] === 2){
               arr[i] += 1;
                arr[i-1] -= 1; 
        }
    }
     console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0 && (arr[i+1] > 0) && arr[i+1] === 2){
               arr[i] += 1;
                arr[i+1] -= 1; 
        }
    }
     console.log(arr)
    
    return arr.filter(a => a !== 0).length;
}