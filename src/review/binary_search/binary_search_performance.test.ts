import binary_search from "./binary_search";
import binary_search_recursive from "./binary_search_recursive";

// create later sorted array
const largeArray: Array<number> = Array.from({length: 100000}, (_, i) => i);

// define test parameters
const numberOfSearches: number = 1000;
const searchValues: number[] = Array.from(
    {
        length: numberOfSearches
    }, () => Math.floor(Math.random() * 100000));

    // Initialize accumulators for total time
    let totalRecursiveTime: number = 0;
let totalIterativeTime: number = 0;
const totalRuns: number = 1000;

for (let i = 0; i < totalRuns; i++) {
    // Measure execution time for recursive version
    let startTime = performance.now();
    searchValues.forEach(value => binary_search_recursive(largeArray, value));
    let endTime: number = performance.now();
    totalRecursiveTime += endTime - startTime;


    // Measure execution time for the iterative version
    startTime = performance.now();
    searchValues.forEach(value => binary_search(largeArray, value));
    endTime = performance.now();
    totalIterativeTime += endTime - startTime;
}

// Calculate averate times
const averageRecursiveTime = totalRecursiveTime / totalRuns;
const averageIterativeTime = totalIterativeTime / totalRuns;

// Log average times
console.log(`Average recursive version time: ${averageRecursiveTime} milliseconds`);
console.log(`Average iterative version time: ${averageIterativeTime} milliseconds`);

