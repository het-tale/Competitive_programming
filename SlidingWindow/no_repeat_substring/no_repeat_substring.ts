function noRepeatSubstring(s: string): number {
    let windowStart: number = 0;
    let maxLength: number = 0;
    let charFrequency: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!(charFrequency.has(s[i]))) {
            charFrequency.set(s[i], 0);
        }
        charFrequency.set(s[i], charFrequency.get(s[i])! + 1)
        while (charFrequency.get(s[i])! > 1) {
            charFrequency.set(s[windowStart], charFrequency.get(s[windowStart])! - 1);
            if (charFrequency.get(s[windowStart]) === 0)
                charFrequency.delete(s[windowStart]);
            windowStart++;
        }
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }
    return maxLength;
}

console.log(noRepeatSubstring('aaabcbbcaadefghi'));