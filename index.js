function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
      // For each element, iterate through the rest of the array
      for (let j = i + 1; j < array.length; j++) {
          // Check if the current pair of elements adds up to the target
          if (array[i] + array[j] === target) {
              return true; // If found, return true
          }
      }
  }
  return false; // If no such pair is found, return false
}
/* 
  Write the Big O time complexity of your function here
*/
O(n^2)
/* 
  Add your pseudocode here
*/
//- Define a function called hasTargetSum (array,targer)
//- Iterate through each element in the array using a for loop.
//- For each element, iterate through the rest of the array using another for loop starting from the next index.
//- Within the nested loop, check if the sum of the current pair of elements equals the target.
//- If the sum equals the target, return true.
//- If no such pair is found after exhausting all combinations, return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
