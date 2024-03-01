function solution(keyinput, board) {
    var result = [0, 0];
    for(let i of keyinput){
        if( i == "right" && result[0] < Math.floor(board[0]/2)){
            result[0]++;
        }
        if( i == "left" && result[0] > -Math.floor(board[0]/2)){
            result[0]--;
        }
        if( i == "up" && result[1] < Math.floor(board[1]/2)){
            result[1]++;
        }
        if( i == "down" && result[1] > -Math.floor(board[1]/2)){
            result[1]--;
        }
    }
    return result;
}