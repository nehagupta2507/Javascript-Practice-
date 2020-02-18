// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the 
// minimal index. In other words, if there are more than 1 duplicated numbers, 
// return the number for which the second occurrence has a smaller index than 
// the second occurrence of the other number does. If there are no such elements, 
// return -1.
// 
// Example
// 
// For a = [2, 3, 3, 1, 5, 2], the output should be
// firstDuplicate(a) = 3.
// 
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller 
// index than than second occurrence of 2 does, so the answer is 3.
// 
// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.
//
// Slow "naive"/"wrong" solution 
// Program exceeded the execution time limit.
// function firstDuplicate(a) {
//   let dup = [];
//   for (i=0; i < a.length; i++){
//       for(j=i+1; j < a.length; j++){
//           if(a[i] === a[j]){
//             dup.push(j)
//         }
//       }
//     }
//     dup.sort()
//     if(dup.length === 0){
//       console.log("-1")
//       return -1
//     }
//     else{
//     console.log(a[dup[0]])
//     return (a[dup[0]])
//     }

// }
// firstDuplicate([2, 4, 3, 3, 5, 1])
function firstDuplicate(a) {
  // return -1 if none found:
  let duplicate = -1;
  
  // iterate through array and test for duplicates:
  for (i = 0; i < a.length; i++) {
      
      // hold current number and it's abs val:
      let currentNum = a[i];
      let absCurr = Math.abs(currentNum) - 1;
      
      // check if the slot indexed by currentNum is positive,
      // if so, it hasn't been seen, so flip it:
      if ( a[absCurr] > 0) {
          a[absCurr] = a[absCurr] * -1;
      }
      // if it's negative, it's been seen, return it:
      else {
          console.log(Math.abs(a[i]))
          return Math.abs(a[i]);
      }    
  }
  console.log(duplicate)
  return duplicate;
}
firstDuplicate( [2, 1, 3, 5, 3, 2])