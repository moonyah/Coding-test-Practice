function solution(participant, completion) {
    var answer = '';
    // 1. 안 포함된 사람 찾기
    // 2. 동명 이인이 있는 경우 : 인원으로 객체를 만들고 해당 keys값의 value값 비교
    const participantHash = {};
    participant.forEach(element => {
        participantHash[element] = (participantHash[element] || 0) + 1;
    })
    const completionHash = {};
    completion.forEach(element => {
        completionHash[element] = (completionHash[element] || 0) + 1;
    })
    for(let i of Object.keys(participantHash)){
        if(participantHash[i] !== completionHash[i]){
                return i;
            } 
    }
    return answer;
}