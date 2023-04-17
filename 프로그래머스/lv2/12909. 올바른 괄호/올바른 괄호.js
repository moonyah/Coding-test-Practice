function solution(s){
    var arr = s.split("");
    var stack = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "("){
            stack.push("(");
        }else{
            stack.pop();
        }
        
        if(arr[0] == ")"){
            stack.push("1");
        }
    }

    return stack.length == 0 ? true:false;
}