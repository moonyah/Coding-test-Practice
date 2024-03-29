function solution(phone_book) {
    let answer = true;
    phone_book.sort(); // 정렬한 후 바로 앞 뒤만 비교해도 됨 

    if(phone_book.length > 1){
        for(let i = 1; i < phone_book.length; i++){
            if(phone_book[i].indexOf(phone_book[i-1]) === 0){
               answer = false;
             }
        }
    }
    if(phone_book.length === 1){
        answer = false;
    }
    return answer;
}