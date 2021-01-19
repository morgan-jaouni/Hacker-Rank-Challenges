# Hacker-Rank-Challenges


### Running Sum of 1d Array

https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    let arr=[];
    let sum =0;
    for (let i=0; i<nums.length; i++) {
        sum=sum+nums[i];
        arr.push(sum);
    }
    return arr;
};

### FizzBuzz
