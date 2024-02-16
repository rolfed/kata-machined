export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = -1; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true
        }
    }
    return false
}

const found_value = linear_search([0,2,3], 3);
console.log('Found value? ', found_value);
