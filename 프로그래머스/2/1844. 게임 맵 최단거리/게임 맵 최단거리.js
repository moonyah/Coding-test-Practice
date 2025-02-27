function solution(maps) {
    let n = maps[0].length; // 가로
    let m = maps.length; // 세로
    // console.log(n, m)
    let visited = Array.from({length: m}, () => Array(n).fill(false));
    for(let i = 0; i < m; i++){ // 세로
        for(let j = 0; j < n; j++){ // 가로
            if(!maps[i][j]){
                visited[i][j] = true;
            }
        }
    }
    // console.log(visited)

    // false는 방문X
    let queue = [[0, 0]];
    visited[0][0] = true;
    
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let answer = 0;
    let front = 0;
    // console.log(queue, visited)
    while(queue.length > front){
        let newQueue = [];
        while(queue.length > front){
            let curr = queue[front];
            visited[curr[0]][curr[1]] = true;
            for(let [y, x] of direction){
                let nextY = curr[0] + y;
                let nextX = curr[1] + x;
                if(0 > nextY || nextY >= m || 0 > nextX || nextX >= n ) continue;
                if(!visited[nextY][nextX]){
                    if(nextY == m-1 && nextX == n-1 ) return answer + 2;
                    visited[nextY][nextX] = true;
                    newQueue.push([nextY, nextX]);
                }
            }
            front++;
        }
        // console.log(newQueue)
        front = 0;
        if(newQueue.length === 0){
            return -1;
        }
        queue = newQueue
        answer++;
    }
    return -1;
}