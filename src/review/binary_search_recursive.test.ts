import binary_search_recursive from "./binary_search_recursive";

function runTest(testName: string, testFunction: () => boolean) {
    console.log(`Test: ${testName}`, 'color: green');

    try {
        if (testFunction()) {
            if (testFunction()) {
                console.log('%c    PASS', 'color: green');
            } else {
                console.log('%c    FAIL', 'color: red');
            }
        }
    } catch (error) {
        console.log('%c    ERROR', 'color: orange');
        console.error(error);
    }
}

function testBinarySearch() {
    runTest('should find item in middle of array', () => binary_search_recursive([1, 2, 3, 4, 5], 3) === true);
    runTest('should return false if item not in array', () => binary_search_recursive([1, 2, 3, 4, 5], 6) === false);
    runTest('should find item at the start of array', () => binary_search_recursive([1, 2, 3, 4, 5], 1) === true);
    runTest('should find item at the end of array', () => binary_search_recursive([1, 2, 3, 4, 5], 5) === true);
    runTest('should return false for empty array', () => binary_search_recursive([], 1) === false);
    runTest('should work with array of size one', () => binary_search_recursive([1], 1) === true);
    // Add more tests as needed
}

// Run the tests
testBinarySearch();
