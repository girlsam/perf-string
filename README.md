### Solution to Hackerrank problem "perfectString"

Solution and test suite for `perfectString` algorithm.

Definitely not the most efficient. This is `O(n^3)`, so yeah, it could use a bit of optimization.

#### Tech used
1. `Node v14.6.0`
1. `npm v6.14.7`
1. npm packages `mocha` and `chai` for test suite
1. `nodemon` for hot reloading

#### To run locally
1. Fork or clone repo
1. run `npm i`
1. To run test suite: `npm test`
1. To run `perfectSubstring` method: `npm start`
1. Option for hot reloading with `npm run hot-start`

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
