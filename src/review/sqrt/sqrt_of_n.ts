function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length)); 

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        const isBroken = breaks[i]
        if (isBroken) {
            break;
        }
    }

    // back one jump
    i -= jumpAmount;

    for (let j = 0; jumpAmount && i < breaks.length; ++j, ++i) {
        const isBroken = breaks[i]
        if (isBroken) {
            return i
        }
    } 

    return -1;
}

console.log(
    two_crystal_balls(
        [false, false, false, false, false, false, true, true, true]
    )
);
