function solution(n, control) {
    for(let i of control){
        if(i == "w"){
            n += 1;
        }else if(i == "s"){
            n -= 1;
        }else if(i == "d"){
            n += 10;    
        }
        else{
            n -= 10;
        }
    }
    return n;
}