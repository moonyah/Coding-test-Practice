function solution(n) {
    var answer = 0;

    const binaryOneNum = (n) => {
        let arr = [];
        while(n > 0){
        if(n%2===0){
            arr.push(0);
        }else{
            arr.push(1);
        }
        n = Math.floor(n/2);
    }
      return arr.reverse().filter(a=>a==1).length;
    }
    
    let next = n + 1;
    while(n < 1000000){
        if(binaryOneNum(n) === binaryOneNum(next)){
            return next;
        }
        next++;
    }
}