export default function bs_list(list: number[], target: number): boolean {
    let lo = 0; // inclusive
    let hi = list.length; // exclusive
    /** tracking **/
    do {
        const midway = Math.floor(lo + (hi - lo) / 2); // avoid overflow
        const value = list[midway];
         if (value === target) {
            return true;
         } else if (value > target) { // everything left handside is greater than value
            hi = midway; // hi is exclusive
         } else {
            lo = midway + 1; // drop the midway value by adding 1
         }

    } while (lo < hi);

    
    return false;
}

console.log(bs_list([0, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // true
