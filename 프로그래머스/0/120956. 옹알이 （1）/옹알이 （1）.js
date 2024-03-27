function solution(babbling) {
    var answer = 0;
    let arr = [];
    let possible = ["aya", "ye", "woo", "ma"];
    for(let i = 0; i < babbling.length; i++){
        arr.push(babbling[i].split(possible[0]))
    }
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        let temp = [];
         for(let j = 0; j < arr[i].length; j++){
            temp.push(...arr[i][j].split(possible[1]))
        }
        arr2.push(temp)
    }
    let arr3 = []
    for(let i = 0; i < arr2.length; i++){
        let temp = [];
         for(let j = 0; j < arr2[i].length; j++){
            temp.push(...arr2[i][j].split(possible[2]))
        }
        arr3.push(temp)
    }
    let arr4 = []
    for(let i = 0; i < arr3.length; i++){
        let temp = [];
         for(let j = 0; j < arr3[i].length; j++){
            temp.push(...arr3[i][j].split(possible[3]))
        }
        arr4.push(temp)
    }
    for(let i of arr4){
        if(i.join('') === ""){
            answer++;
        }
    }
    return answer;
}