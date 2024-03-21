function solution(n, arr1, arr2) {
    var answer = [];
    let mapArr1 = [];
    let mapArr2 = [];

    // 각각의 지도 만들기
    for(let i = 0; i < n; i++){
        let changedArr1 = arr1[i].toString(2).split('')
        let changedArr2 = arr2[i].toString(2).split('')

        while(changedArr1.length < n){
            changedArr1.unshift(0)
        }
        while(changedArr2.length < n){
            changedArr2.unshift(0)
        }
        mapArr1.push(changedArr1.map(a=>a==1? a="#":a=" "))
        mapArr2.push(changedArr2.map(a=>a==1? a="#":a=" "))
    }
    
    // 지도 합치기
    for(let i = 0; i < n; i++){ // 줄
        let oneLine = '';
        for(let j = 0; j < n; j++){
            if(mapArr1[i][j] === ' ' && mapArr2[i][j] === ' '){
                oneLine += ' '
            }
            if(mapArr1[i][j] === '#' || mapArr2[i][j] === '#'){
                oneLine += '#'
            }
        }
        answer.push(oneLine)
    }
    return answer;
}