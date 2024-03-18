function solution(number) {
    var answer = [];

    for(let i  = 0; i < number.length-2; i++){
        let sliceArr1 = number.slice(i);
        let a = sliceArr1[0];
        for(let j = 1; j < sliceArr1.length; j++){
            let sliceArr2 = sliceArr1.slice(j);
            let b = sliceArr2[0];
            for(let z = 1; z < sliceArr2.length; z++){
                let sliceArr3 = sliceArr2.slice(z);
                let c = sliceArr3[0];
                answer.push(a+b+c)
            }
        }
    }
    return answer.filter(a=>a === 0).length;
}