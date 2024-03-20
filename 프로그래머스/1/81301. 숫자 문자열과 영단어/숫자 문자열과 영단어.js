function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < arr.length; i++){
        if(s.includes(arr[i])){
            s = s.slice(0, s.indexOf(arr[i])) + i + s.slice(s.indexOf(arr[i]) + arr[i].length);
            i = 0;
        }
        console.log(s)
    }
    return s/1;
}