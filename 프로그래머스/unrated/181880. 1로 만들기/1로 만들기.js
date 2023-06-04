function solution(num_list) {
    var answer = 0;
    for(let i = 0; i < num_list.length; i++){
        let count = 0;
        while(num_list[i] != 1){
            num_list[i] = num_list[i] % 2 === 0 ? num_list[i] / 2 : (num_list[i]-1) / 2;
            count++;
            //console.log(num_list[i]);
        }
        answer+=count;
    }
    return answer;
}