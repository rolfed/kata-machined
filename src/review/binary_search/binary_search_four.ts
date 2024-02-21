function binary_search(list: Array<number>, target: number): boolean {
    let lo = 0;
    let hi = list.length;

    do {
        let midway = Math.floor(lo + (hi - lo) / 2);

        const value = list[midway];

        if (value === target) {
            return true;
        } else if ( value > target) {
            hi = midway;
        } else {
            lo = midway + 1; 
        }

    } while (lo < hi);
    return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === true);
