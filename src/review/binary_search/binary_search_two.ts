export default function binary_search(list: Array<number>, target: number): boolean {
    let lo = 0; // inclusive 
    let hi = list.length; // exclusive

    do {
        let midway = Math.floor(lo + (hi - lo) / 2);
        const value = list[midway];
        console.count('count');

        if (value === target) {
            return true
        } else if (value > target) { // everything on the left 
            // start [1,2,3,4,5,6,7,8,9] 3
            // next [1,2,3,4,5] 3
            // next [1,2,3] 3
            hi = midway; 
        } else {
            // focus on the righ side
            lo = midway + 1;
        }
    }  while (lo < hi);

    return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === true);
