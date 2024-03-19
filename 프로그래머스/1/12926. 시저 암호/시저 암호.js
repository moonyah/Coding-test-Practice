function solution(s, n) {
    var answer = '';
    let az = "abcdefghijklmnopqrstuvwxyz";
    let AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < s.length; i++){
        if(az.includes(s[i])){
            answer += az[(az.indexOf(s[i])+n)%(az.length)];
        }
        if(AZ.includes(s[i])){
            answer += AZ[(AZ.indexOf(s[i])+n)%(AZ.length)];
        }
        if(s[i] === ' '){
            answer += ' ';
        }
    }
    return answer;
}