function solution(str_list) {
    let indexL = str_list.indexOf("l");
    let indexR = str_list.indexOf("r");
    if(indexR == -1){
        indexR = 21;
    }
    if(indexL == -1){
        indexL = 21;
    }
      
    if(indexL < indexR){ // 먼저 나오는 문자열이 l인 경우, l 인덱스 값이 더 작은 경우
        str_list.splice(indexL);
    }else if(indexR < indexL){
        str_list.splice(0, indexR+1);
    }else{
        str_list = []
    }

    return str_list;
}