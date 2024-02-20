export default function binary_search(list: Array<number>, target: number): boolean {
    let lo = 0; // inclusive;
    let hi = list.length; // exclusive;

    do {
        let midway = Math.floor(lo + (hi - lo) / 2);
        const value = list[midway];
        // target was found
        if (value === target) {
            return true;
            // lo is bigger than midway
        } else if (value > target) { 
            hi = midway;
        } else {
            lo = midway + 1;
        } 
        // hi is bigger than midway
    } while (lo < hi);

    return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === true);
