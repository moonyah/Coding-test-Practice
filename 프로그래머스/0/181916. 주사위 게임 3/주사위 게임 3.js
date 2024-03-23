function solution(a, b, c, d) {
    var answer = 0;
    let arr = [a, b, c, d]
    let set = [...new Set(arr)];
    // 모두 같다면
    if(set.length === 1){
        answer = 1111 * a;
    }
    // 3개 같고 1개 다르다면
    if(set.length === 2 && (arr.filter(a=>a == arr[0]).length !== 2)){
        let p = 0;
        let q = 0;
        for(let i of arr){
            if(arr.filter(a => a === i).length === 3){
                p = i;
            }
            if(arr.filter(a => a === i).length === 1){
                q = i;
            }
        }
        answer = (10 * p + q)*(10 * p + q);
    }
    // 2개 같고 2개 같고
    if(set.length === 2 && arr.filter(a=>a == arr[0]).length == 2){
        let p = set[0];
        let q = set[1];
        answer = (p + q)*Math.abs(p - q);
        console.log("이 경우", p, q)
    }
    // 2개 같고 2개 다르고
    if(set.length === 3){
        let p = 0;
        let q = 0;
        let r = 0;
        for(let i of arr){
            if(arr.filter(a => a === i).length === 2){
                p = i;
            }
        }
        arr = arr.filter(a => a !== p);
        q = arr[0]
        r = arr[1]
        answer = q*r;
    }
    // 다 다르고
    if(set.length === 4){
        answer = Math.min(...set)
    }
    
    return answer;
}