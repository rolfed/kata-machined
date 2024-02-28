export default function searchInsert(list: Array<number>, target: number): number {
    let lo = 0; // inclusive 
    let hi = list.length - 1; //exclusive
    
    while (lo <= hi) {
        let midway = Math.floor(lo + (hi - lo) / 2);
        console.log('midway test: ', midway);
        const value = list[midway];

        if (value === target) {
            return value;
        } else if (value < target) {
            lo = midway + 1; // search right half
        } else {
            hi = midway - 1; // search left half
        }
    }

    return lo;
}
 // Test case 1:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
const expected1 = 2; // Expected output is the index of target 5, which is 2.
const output1 = searchInsert(nums1, target1);
console.log(`Test 1 Result: ${output1 === expected1} (Output: ${output1}, Expected: ${expected1})`);

// Test case 2:
const nums2 = [1, 3, 5, 6];
const target2 = 2;
const expected2 = 1; // Expected output is the index where 2 should be inserted, which is 1.
const output2 = searchInsert(nums2, target2);
console.log(`Test 2 Result: ${output2 === expected2} (Output: ${output2}, Expected: ${expected2})`);

// Test case 3:
const nums3 = [1, 3, 5, 6];
const target3 = 7;
const expected3 = 4; // Expected output is the index where 7 should be inserted, which is 4.
const output3 = searchInsert(nums3, target3);
console.log(`Test 3 Result: ${output3 === expected3} (Output: ${output3}, Expected: ${expected3})`);


