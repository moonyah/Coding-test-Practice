function solution(genres, plays) {
    var answer = [];
    let genresTotalplayObj = {};
    genres.forEach((a, b) => {
        genresTotalplayObj[a] = (genresTotalplayObj[a] || 0) + plays[b];
    })
    let genresSortedArr = Object.keys(genresTotalplayObj).sort((a, b) => genresTotalplayObj[b] - genresTotalplayObj[a]);
    // ["pop","classic"]
    
    // genresTotalplayObj에서 genresSortedArr[0]에 해당하는 plays : index 객체를 만든다.
    let genresArr = []; // 임시 Obj // genresSortedArr[i]에 해당하는 plays : index 객체 만들기
    for(let i = 0; i < genresSortedArr.length; i++){
        genresArr = [];
        for(let j = 0; j < genres.length; j++){
            if(genresSortedArr[i] === genres[j]){
                genresArr.push([plays[j], j])
            }
        }
        console.log(genresArr.sort((a, b) => b[0] - a[0])[0][1]);
        answer.push(genresArr.sort((a, b) => b[0] - a[0])[0][1]);
        

        if(genresArr.length > 1){
           answer.push(genresArr.sort((a, b) => b[0] - a[0])[1][1]);
         }
    }
    
    return answer;
}