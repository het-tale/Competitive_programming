function findMaxAverage(nums: number[], k: number): number {
    let windowStart: number = 0;
    let windowEnd: number = 0;
    let average: number[] = [];
    let sum: number = 0;
    while (windowEnd < nums.length) {
        sum += nums[windowEnd];
        if (windowEnd >= k - 1) {
            average.push(sum / k);
            sum -= nums[windowStart];
            windowStart++;
        }
        windowEnd++;
    }
    return Math.max(...average);
};

console.log(findMaxAverage([5], 1));