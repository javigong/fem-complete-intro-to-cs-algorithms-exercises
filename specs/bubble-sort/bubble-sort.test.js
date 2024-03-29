/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  - Time complexity: sorted list is the best case with O(n), average case is O(n^2), worst case is O(n^2).
  - Space complexity is constant, we operate in the array itself, is O(1).

*/

function bubbleSort(nums) {
  let swaps = false;
  let length = nums.length;
  do {
    swaps = false;
    for (let i = 1; i < length; i++) {
      if (nums[i - 1] > nums[i]) {
        let a = nums[i - 1];
        let b = nums[i];
        nums[i - 1] = b;
        nums[i] = a;
        swaps = true;
      }
    }
  } while (swaps);

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
