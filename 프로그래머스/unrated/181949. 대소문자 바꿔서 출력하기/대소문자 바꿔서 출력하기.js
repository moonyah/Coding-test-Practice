const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    arr = str.split('');
    for(let i=0; i< arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            process.stdout.write(arr[i].toLowerCase());
        }else{
            process.stdout.write(arr[i].toUpperCase());
        }
    }
});