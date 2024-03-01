function solution(arr, k) {
    var result = [];
    for(let i in arr){
        if(!result.includes(arr[i]))
        {
            result.push(arr[i])
        }
    }
    if(result.length > k){
        result = result.slice(0, k);
        return result;
    }else{
        while(result.length < k){
            result.push(-1)
        }
        return result;
    }
}