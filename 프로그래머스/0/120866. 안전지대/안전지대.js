function solution(board) {
    var answer = 0;
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === 1){
                if(i >= 1){
                    if(board[i-1][j] === 0){board[i-1][j] = 2}
                    if(board[i-1][j-1] === 0 && j-1 >= 0){board[i-1][j-1] = 2}
                    if(board[i-1][j+1] === 0 && j+1 < board.length){board[i-1][j+1] = 2}
                }
                if(board[i][j-1] === 0 && j-1 >= 0){board[i][j-1] = 2}
                if(board[i][j+1] === 0 && j+1 < board.length){board[i][j+1] = 2}
                
                if(i+1 < board.length){
                    if(board[i+1][j] === 0){board[i+1][j] = 2}
                    if(board[i+1][j-1] === 0 && j-1 >= 0){board[i+1][j-1] = 2}
                    if(board[i+1][j+1] === 0 && j+1 < board.length){board[i+1][j+1] = 2}
                }
            }
        }
    }
    console.log(board)
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === 0){
                answer++;
            }
        }
    }
    
    return answer;
}