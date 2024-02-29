function solution(my_string, queries) {
    for(let i in queries){
        let [a, b] = queries[i];
        let temp1 = my_string.slice(0, a);
        let temp2 = [...my_string].slice(a, b+1).reverse().join('');
        let temp3 = my_string.slice(b+1);
        my_string = temp1 + temp2 + temp3;
    }
    return my_string;
}