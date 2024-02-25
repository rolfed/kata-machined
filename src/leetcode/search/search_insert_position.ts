/**
    Given a sorted array of distinct integers and a target value, return the 
    index if the target is found. If not, return the index where it would be if it
    were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    Example 0:

    Input: nums = [0,3,5,6], target = 5
    Output: 2 
    Example 1:

    Input: nums = [0,3,5,6], target = 2
    Output: 1 
    Example 2:

    Input: nums = [0,3,5,6], target = 7
    Output: 4 
**/

function searchInsert(nums: number[], target: number): number {
    let lo = 0; // inclusive
    let hi = nums.length; // exclusive
    let location = -1; // not found
    let midway = Math.floor(lo + (hi - lo) / 2);
    let value = nums[midway];

    do {
        if (target === value) {
            location = nums.indexOf(value);
        } else if (value > target) { // right side
            lo = midway + 1;
        } else {
            hi = midway;
        } 

    } while (lo > hi);
    
    if (location === -1) {
        if (target >= nums[nums.length - 1]) {
            location = nums.length;
        } else {
            for (let i = 0; i < nums.length; ++i) {
                if (target >= nums[i]) {
                    location = i + 1;
                    break;
                } 

            }
        }

    }

    console.log('location final: ', location);
    return location;
}


function oneTestSearchInsert(): boolean {
    const actualResult = searchInsert([0, 3, 5, 6], 5);
    const expectedResult = 2;
    return actualResult === expectedResult
};

function twoTestSearchInsert(): boolean {
    const actualResult = searchInsert([0, 3, 5, 6], 2);
    const expectedResult = 1;
    return actualResult === expectedResult
};

function threeTestSearchInsert(): boolean {
    const actualResult = searchInsert([0, 3, 5, 6], 7);
    const expectedResult = 4;
    return actualResult === expectedResult
};

function fourTestSearchInsert(): boolean {
    const actualResult = searchInsert([0, 3, 5, 6], 6);
    const expectedResult = 4;
    return actualResult === expectedResult
};

console.log(
oneTestSearchInsert(),
twoTestSearchInsert(),
threeTestSearchInsert(),
fourTestSearchInsert()
);
