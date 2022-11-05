// 효율성 고려하기
function solution(people, limit) {
  let sortKg = people.sort((a, b) => a - b);
  let left = 0;
  let right = sortKg.length - 1;
  let cnt = 0;
  while (left <= right) {
    // left + right 값이 limit 보다 작을 때
    if (sortKg[left] + sortKg[right] <= limit) {
      left++;
      right--;
      cnt++;
    }
    // left + rigth 값이 limit 보다 클 때
    else if (sortKg[left] + sortKg[right] > limit) {
      right--;
      cnt++;
    } else if (left === right) {
      cnt++;
      break;
    }
  }
  return cnt;
}

// 효율성 좋지 않은 코드
// function solution(people, limit) {
//     let sortKg = people.sort((a, b) => a - b);
//     let cnt = 0;
//     while(sortKg.length > 0){
//         if(sortKg[0] + sortKg[sortKg.length - 1] <= limit){
//             // sortKg = sortKg.slice(1, sortKg.length - 1);
//             sortKg.pop()
//             sortKg.shift();
//         }else{
//             sortKg.pop();

//         }
//         cnt++;
//     }
//     return cnt;
// }
