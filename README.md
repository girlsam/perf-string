### Solution to Hackerrank problem "perfectString"

Solution and test suite for `perfectString` algorithm.

#### Technology used
1. `Node v14.6.0`
1. `npm v6.14.7`
1. `mocha` and `chai` for test suite
1. `babel` for transpiling ES6
1. `nodemon` for hot reloading

#### To run locally
1. Fork or clone repo
1. Run `npm i`
1. To run test suite, use command `npm test`
1. To run `perfectSubstring`, use command `npm run start:dev` OR
1. Option for hot reloading with `npm run start:watch`

#### Quick explanation of `perfectSubstring`
1. First, I address some edge cases. I like to call these evaluations 'bail first', that is, return out immediately because they don't require any calculations.
1. I intialize a `count` variable at 0, so that I can track the number of times we encounter a perfect substring.
1. Then, I have nested `for-loops` that are used to create each substring combo. This is `O(n^2)`. I use a `for-loop` rather than array methods because I really just need to capture indices rather than values.
1. With each substring combo, I perform two evaluations: I only care about substring with a length greater than frequency, `k`, and, if that evaluates to `true`, then I evaluate if the substring is perfect.
1. This evaluation is done in `isPerfect` which returns a boolean. This is another nested loop (`O(n^3)`) that uses `reduce` to build a frequency map. Keys represent the value at each index, and values represent their occurrence in the substring.
1. The final evaulation in `isPerfect` looks at each value in an array of keys and determines whether they match `k`
1. Given `isPerfect()=true`, increment the count
1. Once all substring combos are evaluated, `return count` of perfect substrings.

#### Areas for optimization
* *Improve efficiency.* This algorithm's time complexity is `O(n^3)` which is not optimal. A goal is to improve its complexity to `O(n^2)`.
* *Address edge cases.* What if `k=1` or `s.length=100000`? This lends itself to improvements in the alogorithm's efficiency based on its inputs.
* *Recursion.* It would be a fun exercise to attempt this solution with a recursive algorithm, however I wonder about the memory implications of using recursion here. 

***

##### Prompt: 
There is s that consists of digits from 0 to 9, and an integer k. A substring s[L:R] (where 0 = L = R < sizeof(s) ) is a contiguous group of characters with s.  A substring is called a perfect substring if all of its elements occur exactly k times. 

For example,  s = 1102021222 and k = 2. Its 6 perfect substrings are:

    s[0:1] = 11
    s[0:5] = 110202
    s[1:6] = 102021
    s[2:5] = 0202
    s[7:8] = 22
    s[8:9] = 22

Calculate the number of perfect substrings in s.

Function Description

Complete the function perfectSubstring in the editor below. The function must return an integer that represents the number of perfect substrings in the given string.

perfectSubstring has the following parameters:

    s: a string where the value of each element s[i] is described by the character at position i (where 0 = i < n).

    k: an integer that denotes the required frequency of the substring.
