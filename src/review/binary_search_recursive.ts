export default function binary_search_recursive(
    list: Array<number>, 
    target: number,
    lo: number = 0, 
        hi: number = list.length - 1
): boolean {
    if (lo > hi) {
        return false; // base case: target not found
    }

    let midway = Math.floor(lo + (hi - lo) / 2);
    let value = list[midway];

    if (value === target) {
        return true;
    }

    if (value > target) {
        return binary_search_recursive(list, target, lo, midway - 1);
    }

    return binary_search_recursive(list, target, midway + 1, hi);


}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binary_search_recursive(list, 5) === true);
