/**
    Given a sorted array of distinct integers and a target value, return the 
    index if the target is found. If not, return the index where it would be if it
    were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:

    Input: nums = [1,3,5,6], target = 5
    Output: 2
    Example 2:

    Input: nums = [1,3,5,6], target = 2
    Output: 1
    Example 3:

    Input: nums = [1,3,5,6], target = 7
    Output: 4
**/

function searchInsert(nums: number[], target: number): number {
    let lo = 0; // inclusive
    let hi = nums.length; // exclusive
    let midway = Math.floor(lo + (hi - lo) / 2);
    let location = -1; // not found

    do {
        let value = nums[midway];
        if (value === target) {
            location = nums.indexOf(value);
            console.log('loc ', location);
        } else if (value > target) { // right side
            lo = midway + 1;
        } else {
            hi = midway;
        }

            console.log('l noc ', location);
        if (!!location) {
            console.log('location not found');
            // target >= nums[i] && target < nums[i + 1] get index of nums[i + 1] 
            const next = nums.indexOf(value) + 1;
            if (value >= target && value < nums[next]) {
                location = next;
            }   

        }
    } while (lo > hi || !location);

    return location;
}

function oneTestSearchInsert(): boolean {
    const actualResult = searchInsert([1, 3, 5, 6], 5);
    const expectedResult = 2;
    return actualResult === expectedResult
};

function twoTestSearchInsert(): boolean {
    const actualResult = searchInsert([1, 3, 5, 6], 2);
    const expectedResult = 1;
    return actualResult === expectedResult
};

function threeTestSearchInsert(): boolean {
    const actualResult = searchInsert([1, 3, 5, 6], 7);
    const expectedResult = 1;
    return actualResult === expectedResult
};

console.log(
//oneTestSearchInsert(),
twoTestSearchInsert(),
// threeTestSearchInsert()
);
