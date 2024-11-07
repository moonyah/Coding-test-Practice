function solution(wallpaper) {
    var answer = [];
    let arr = [];
    let line = 0;
    let perLine = 0;
    for(let i of wallpaper){
        let subArr = i.split('');
        perLine = subArr.length;
        arr.push(subArr)
        line++;
    }
    let maxX = 0;
    let maxY = 0;
    let minX = Infinity;
    let minY = Infinity;
    for(let i = 0; i < line; i++){
      for(let j = 0; j < perLine; j++){
        if(arr[i][j] === '#'){
           minX = Math.min(minX, i);
           minY = Math.min(minY, j);
           maxX = Math.max(maxX, i);
           maxY = Math.max(maxY, j);
        }
      }
    }
    answer = [minX, minY, maxX+1, maxY+1]
    return answer;
}