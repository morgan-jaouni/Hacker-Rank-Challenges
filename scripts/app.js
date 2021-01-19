
// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums) {
    let arr=[]
    let sum=0;

    for (i=0; i<nums.length; i++) {

        sum= sum + nums[i];
        arr.push(sum);
    } 

    return arr;

}
// nums = [1,2,3,4]
// console.log(runningSum(nums))



//---------- FizzBuzz-------------->
//if num is divisible by 3, log fizz
//if num is divisible by 5, log buzz
//if num is divisible by 3 & 5, log fizzbuzz

function fizzBuzz(nums) {

    for (i=1; i<25; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        
        } else if (i % 3 == 0) {
            console.log('Fizz');
        
        } else if (i % 5 == 0) {
            console.log('Buzz');
        
        } else {
            console.log(i);
        }
    }
}
// console.log(fizzBuzz());



//------------Two Sum------------->
// https://leetcode.com/problems/two-sum/
//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up 
//to target = 9;
function twoSum(num,target) {
    num=[3,2,4];
    target=6;
    let arr =[];
    for (let i=0; i<num.length; i++) {

        for (let j=0; j<num.length; j++) {

            if ( num[i] !== num[j] && num[i] + num[j] === target ) {
    
                arr.push(num[i]);
                arr.push(num[j]);
                return arr;
        };
      };
    };
};

// console.log(twoSum());


//----------Defanging IP Address------------>
//https://leetcode.com/problems/defanging-an-ip-address/
//A defanged IP address replaces every period "." with "[.]".


function defangIP(address) {
    address="1.1.1.1";
    let defanged = "";

    for ( let i = 0; i<address.length; i++) {

        if ( address[i] == ".") {
            defanged += "[.]"
        } else {
            defanged += address[i]
        }
    }   
        return defanged; 
};

// console.log(defangIP());