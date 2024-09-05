function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const gcd = (a: number, b: number): number => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };
    const len = gcd(str1.length, str2.length);
    return str1.substring(0, len);
};

console.log(gcdOfStrings("ABCABC", "ABC"));