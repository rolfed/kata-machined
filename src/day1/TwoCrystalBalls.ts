export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) { // jump to next sqrt value
        if (breaks[i]) { // index of breaks is true break
            break;
        }
    }

    i -= jumpAmount; // jump back one sqrt
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) { 
        // iterate over secion of the sqrt and make sure that the length is not greater than the total length
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

console.log(
    two_crystal_balls(
        [false, false, false, false, false, false, true, true, true]
    )
);

