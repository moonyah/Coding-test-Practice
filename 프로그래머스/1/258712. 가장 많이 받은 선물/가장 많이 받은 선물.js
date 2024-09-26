function solution(friends, gifts) {
    var answer = 0;
    let len = friends.length;
    let arr = Array(len).fill(0).map(a=> Array(len).fill(0));
    
    for(let i = 0; i < gifts.length; i++){
        let [a, b] = gifts[i].split(' ');
        let indA = friends.indexOf(a);
        let indB = friends.indexOf(b);
        arr[indA][indB]++;
    }
    
    // 선물 지수 구하기
    let giftScore = Array(len).fill(0);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            giftScore[i] += arr[i][j];
            giftScore[j] -= arr[i][j];
        }
    }
    console.log("giftScore", giftScore)
    
    let result = Array(len).fill(0);
    // 0 > 1, 2, 3 비교 [0, 1]하고 [1, 0] 비교
    // 1 > 0, 2, 3 비교 [1, 0]하고 [0, 1] 비교
    // 1. 더 많이 줬다면 +1
    for(let i = 0; i < arr.length; i++){
         for(let j = 0; j < arr.length; j++){
            if(i !== j && arr[i][j] > arr[j][i]){
                console.log(result[i]++)
            }
             if(i !== j && (arr[i][j] === arr[j][i]) && (giftScore[i] > giftScore[j])){
                console.log("선물지수비교 시", i)
                 console.log(result[i]++)
            }
        }
    }
    
    return Math.max(...result);
}

// 1. 더 많이 줬다면 +1
// 2. 주고 받지 않은 사람이면 선물 지수 비교해서 내가 더 크면 +1 
// 3. 더 적게 준 사람이면 패스 +0