/**
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, 
    nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 
    and should be ignored. nums2 has a length of n.

    Example 1:

    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
    Example 2:

    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
    Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].
    Example 3:

    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
    Output: [1]
    Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].
    Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
    
    url: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

**/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // m = 3
    // for (let i = m; i < nums1.length; ++i) {
        for (let j = 0; j < nums2.length; ++j) {
             nums1[j + m] = nums2[j];
        }
    //} 
};

// Test case 1:
let nums1_1 = [1, 2, 3, 0, 0, 0];
const m1 = 3;
let nums2_1 = [2, 5, 6];
const n1 = 3;
merge(nums1_1, m1, nums2_1, n1);
const expected_1 = [1, 2, 2, 3, 5, 6];
console.log(`Test 1 Result: ${JSON.stringify(nums1_1) === JSON.stringify(expected_1)} (Output: ${JSON.stringify(nums1_1)}, Expected: ${JSON.stringify(expected_1)})`);

// Test case 2:
let nums1_2 = [1];
const m2 = 1;
let nums2_2: number[]= [];
const n2 = 0;
merge(nums1_2, m2, nums2_2, n2);
const expected_2 = [1];
console.log(`Test 2 Result: ${JSON.stringify(nums1_2) === JSON.stringify(expected_2)} (Output: ${JSON.stringify(nums1_2)}, Expected: ${JSON.stringify(expected_2)})`);

// Test case 3:
let nums1_3 = [0];
const m3 = 0;
let nums2_3 = [1];
const n3 = 1;
merge(nums1_3, m3, nums2_3, n3);
const expected_3 = [1];
console.log(`Test 3 Result: ${JSON.stringify(nums1_3) === JSON.stringify(expected_3)} (Output: ${JSON.stringify(nums1_3)}, Expected: ${JSON.stringify(expected_3)})`);

