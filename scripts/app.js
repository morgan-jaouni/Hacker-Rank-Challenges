
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



//--------------Buy and Sell Stock---------->
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


function maxProfit(prices) {

    let min = prices[0], max=0;

    for (let i=0; i<prices.length; i++) {

        if (prices[i] - min > max) {
            max=prices[i] - min;
        }
        if (prices[i] < min) min = prices[i]
        }
        return max;
    }

//----------Mulitples of 3 and 5---------->
// https://projecteuler.net/problem=1
//Find the sum of all multiples of 3 or 5 below 1000

function multiples(num) {

    let sum =0;

    for (let i=0; i<1000; i++) {
        if (i % 3 == 0 ) {
            sum += i; 
        }
        if (i % 5 ==0 ) {
            sum +=i;
        }
    }
    return sum;
}

// console.log(multiples())

//-------Valid Palindrome-----------> 
// https://leetcode.com/problems/valid-palindrome/



function isPalindrome(word) {
    
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
        console.log(`${word}` + ' is a palindrome ')
    }
    else {
        console.log(`${word}` + ' is NOT a palindrome')
    }
}


// isPalindrome('Racecar');


//Sum of 2 ------------->
function sumof2(num1,num2) {

    console.log(num1 + num2);

}

// sumof2(1,1);

const feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }

//   console.log(feedTheCat('sad'));


//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
//Given an integer number n, return the difference between the product of its digits and the sum of its digits.

function returnDifference(num) {
        let sum=0;
        let product = 1;
        let number = num.toString();
        for (let i =0; i<number.length; i++) {
             sum += parseInt(number[i]);
             product *= parseInt(number[i]);
            }
            return sum - product;
}

// console.log(returnDifference(12));

// while loops ---------->

function whileLoop(number) {

        while (number>1) {
            number = number - 1;
            console.log(number);
        }
         if ( number === 1 )  {
              console.log("Blastoff!");
        }
    }

// const loop = 4;
// whileLoop(loop);


function clickMe() {
    let counter = 0;
    counter +=1;
    document.getElementById("clicks").innerHTML = counter;
}


function isPalindrome(word) {

    for (let i = 0; i<word.length; i++) {
        if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')) {
            console.log(`${word}` + ' is a palindrome');
            return;

        } else {
            console.log(`${word}` + ' is NOT a palindrome');
            return;
        }
    }
}

// const word = 'Race';
// isPalindrome(word);

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

const n=7;
const arr=[1,2,1,2,1,3,2];

function howManyPairs(n,arr) {
        let pairs={};
        let sum=0;
    for (let i of arr) {
        if (pairs[i]) {
            pairs[i] +=1;
        } else {
            pairs[i]=1;
        }
        if (pairs[i] % 2 ==0) {
            sum +=1;
        }
    }
    return sum;
}

const result = howManyPairs(n,arr);
console.log(result);