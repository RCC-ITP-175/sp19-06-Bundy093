console.log("exercise1.js start");
// INSTRUCTIONS
// Write a function named multiplyThem that accepts two arguments 
// and returns the value of the two arguments multiplied together.
function multiplyThem(a, b) {
  console.log(a * b);
}
  multiplyThem(6, 4)
break;
function multiplyThem(a, b) {
  console.log(a * b);
}
multiplyThem(42, 43)
break;
function multiplyThem(a, b) {
  console.log(a * b);
}
multiplyThem(1, 7)
break;
function multiplyThem(a, b) {
  console.log(a * b);
}
multiplyThem(7, 3)


///////////////////////
// INSTRUCTOR FEEDBACK
///////////////////////
// You wrote a good function on lines 5-7, the only thing I'd change is
// line 6, use return a*b and not console.log(a*b)

// -5 pts
// Lines 8-23 are unneccesary and actually cause you some problems rather than help
// Because I have the verification section at the bottom of the file,
// lines 8, 13, 18, and 23 can just be deleted, but I understand why you added them
// since you're using console.log() in your function on line 6. No real harm there

// The break statements on lines 9, 14, and 19 will throw errors as break is intended
// to be used in loops or switch statedments.

// Redefining your function on lines 10, 15, and 20 loses you all the benefits of 
// writing a function, which is to write some code once (lines 5-7) and then not
// have to rewrite them again.
















// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(multiplyThem(4,6)); //should return 24
console.log(multiplyThem(42,43)); //should return 1806
console.log(multiplyThem(1,7)); //should return 7
var num1 = 7;
var num2 = 3;
console.log(multiplyThem(num1, num2)); //should return 21
