// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];




var sum = integers.sort(function(first,second){return first - second}).splice(0,10).map(function(integers){return (integers * 1.5) - 1}).reduce(function(previousValue, currentValue){return previousValue + currentValue})

console.log(sum);