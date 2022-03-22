// const isPalindrome = (n) => {
   
//     let newn = n.toLowerCase();
//     let left = 0;
//     let right = newn.length-1;

//     while (right > left) {
//         if (newn.charAt(right--) != newn.charAt(left++))
//         return false;
//     }
//     return true;
// }


// console.log(isPalindrome("Madam"));
 

// const lenthOfLongestSubstring = (n) => {
//     if (n.length <= 1) 
//     return n.length;

    

// }

// const logEvenNums = (nums) => {
//     for (i=0; i<=nums; i=i+2) {
//         console.log(i);
//     }
// };

// logEvenNums(5);

// const countdown = (num) => {
//     for (let i=num; i>0; i--) {
//         console.log(i);
//     }
// }

// countdown(10);

// console.log(array.reduce(function))

// const solution = (A) => {
    
//     A.sort((a, b) => a-b);
//     console.log(A);
// }

// solution([10, 3, 4, 7, 2, 8]);

const S = `00:01:07,400-234-090 
00:05:01,701-080-080 
00:05:00,400-234-090`

// S is a string of N=3 lines 
// less than 5 min - 3 cents per sencond
//more than 5 min -150 cents per minute
// most repeated phone number is free 

function solution(S) {

    const fiveMinuteCutOff = 300 //seconds
    const centsPerSec = 3 // cents per second
    const centsPerStartedMin = 150 // cents per started minute
    
    const regex = /([0-9]+(-[0-9]+)+)/;
    const matches = S.match(regex);
    return S.indexOf(matches);
}

console.log(solution(S));

const convertToSeconds = () => {
    const test = "00:04:23";
    const [hours, minutes, seconds] = test.split(':');
    const totalSeconds = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);

    if (totalSeconds > 300) {
        // centsPerStartedMinute();
        console.log("greater than 300");       
    } else {
        return (totalSeconds * 3);
    };
    
    
}

convertToSeconds();