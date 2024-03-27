function solution(n, words) {
    let 탈락자순서 = 0;
    
    let temp = [words[0]];
    for(let i = 1; i < words.length; i++){
        if(temp.includes(words[i]) || (temp[temp.length-1].slice(-1) !== words[i][0])){ // 탈락하게 되는 경우
            탈락자순서 = i+1; break;
        }else{
            temp.push(words[i]);
        }
    }
    
    let num = (탈락자순서)%(n) === 0 ? n : (탈락자순서)%(n);
    let numNum = (탈락자순서)%(n) === 0 ? (탈락자순서)/(n) : Math.floor((탈락자순서)/(n))+1;

    // let numNum = words.filter((a, b) => words.length % n === 0 ? b % n === 0 : b % n === num).length;

    return 탈락자순서 === 0 ? [0, 0] : [num, numNum];
}