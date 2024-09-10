function maxSubarrayOfSizeK(arr: number[], k: number): number {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
  
      if (windowEnd >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return maxSum;
}

console.log(maxSubarrayOfSizeK([100, 200, 300, 400, 50], 4)) 