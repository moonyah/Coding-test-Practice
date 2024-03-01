function solution(arr) {
    var result = [];
    let 행 = arr.length;
    let 열 = arr[0].length;
    if(행 > 열){ // 끝에 0을 추가해야 하는 경우
        for(let i in arr){
            let zeroArr = new Array(행).fill(0);
            result.push(zeroArr.map((el, index) => index < 열 ? el = arr[i][index] : el = 0))
        }
    }else if(행 < 열){ // 0인 열 추가
        let zeroArr = new Array(열).fill(0);
        result = [...arr];
        for(let i = 0; i < (열-arr.length); i++){
            result.push(zeroArr)
        }
    }else{ // 행 수 = 열 수
        result = arr;
    }
    return result;
}