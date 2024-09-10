function minSubArrayLen(target: number, nums: number[]): number {
    let minLength: number = Infinity;
    let sum: number = 0;
    let windowStart: number = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            minLength = Math.min(minLength, i - windowStart + 1);
            sum -= nums[windowStart];
            windowStart++;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])) // 0