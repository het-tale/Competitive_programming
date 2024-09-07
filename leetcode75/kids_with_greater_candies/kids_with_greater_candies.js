"use strict";
function kidsWithCandies(candies, extraCandies) {
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        let max = Math.max(...candies.slice(0, i), ...candies.slice(i + 1));
        max <= candies[i] + extraCandies ? result.push(true) : result.push(false);
    }
    return result;
}
;
let result = kidsWithCandies([4, 2, 1, 1, 2], 1);
result.forEach(element => {
    console.log(element);
});
