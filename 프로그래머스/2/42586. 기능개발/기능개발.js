function solution(progresses, speeds) {
    var answer = [];
    let days = [];
    
    // 각 작업 완료하려면 필요한 일 수 배열
    for(let i = 0; i < progresses.length; i++){
        days.push(Math.ceil((100 - progresses[i])/speeds[i]))
    }
    console.log(days)
    
     // days를 이용해서 배포 데이 배열 생성 [[배포 일, 배포 기능 개수], [배포 일, 배포 기능 개수], ...]
    let releaseDays = [];
    releaseDays.push([days[0], 1]) // 첫 배포 데이 넣기
    console.log(releaseDays)
    
    for(let i = 1; i < days.length; i++){
        if(days[i] <= releaseDays[releaseDays.length-1][0]){
            releaseDays[releaseDays.length-1][1]++;
        }else{
            releaseDays.push([days[i], 1])
        }
    }
    
    for(let i of releaseDays){
        answer.push(i[1]);
    }
    
    return answer;
}