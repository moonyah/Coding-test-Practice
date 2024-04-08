function solution(people, limit) {
    var answer = 0;
    // 내림차순으로 정렬
    // 가장 무거운 사람과 가장 가벼운 사람의 합을 구하고 limit가 넘으면 가장 무거운 사람 보트에 태워 보낸다! => 이 과정 반복
    people.sort((a, b) => a - b);
    let right = people.length-1;
    let left = 0;
    while(left <= right){
          if(people[left] + people[right] <= limit){
              left++;
          }
         right--;
         answer++;
    }
    return answer;
}