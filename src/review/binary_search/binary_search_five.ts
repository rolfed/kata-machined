function binary_search(list: Array<number>, target: number): boolean {
    let lo = 0; // inclusive
    let hi = list.length; // exclusive

    do {
        const midway = Math.floor(lo + (hi - lo) / 2);
        const testValue = list[midway];

        if (testValue === target) {
            return true;
        }

        // shift lo to midway
        if (testValue < target) { // right side of the array
            lo = midway + 1;
        }

        // shift hi to midway
        if (testValue > target) {
            hi = midway;
        }

    } while (lo < hi); // we will stop when lo and hi are the same testValue


    return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === true);
