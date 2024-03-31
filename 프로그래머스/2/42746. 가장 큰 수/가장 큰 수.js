function solution(numbers) {
    var answer = '';
    let repeat = numbers.sort((a, b) => b - a)[0].toString().split('').length + numbers.sort((a, b) => b - a)[1].toString().split('').length;

    numbers = numbers.sort((a, b)=>{
        let i = 0;
        while(i < repeat){
            if(a.toString().split('')[i] > b.toString().split('')[i]){
                return -1;
            }
            if(a.toString().split('')[i] < b.toString().split('')[i]){
                return 1;
            }
            if(a.toString().split('')[i] === undefined && (b.toString().split('').concat(a.toString().split(''))[i] > a.toString().split('').concat(b.toString().split(''))[i])){
                return 1;
            }
            if(a.toString().split('')[i] === undefined && (b.toString().split('').concat(a.toString().split(''))[i] < a.toString().split('').concat(b.toString().split(''))[i])){
                return -1;
            }
            if(b.toString().split('')[i] === undefined && (a.toString().split('').concat(b.toString().split(''))[i] > b.toString().split('').concat(a.toString().split(''))[i])){
                return -1;
            }
            if(b.toString().split('')[i] === undefined && (a.toString().split('').concat(b.toString().split(''))[i] < b.toString().split('').concat(a.toString().split(''))[i])){
                return 1;
            }
            i++;
        }
        
    })
    
    return numbers[0] === 0 ? "0" : numbers.join('');
}