

// ##### ONE LINERS #####################
// Problem 1 ) ---------------------------
const checkAge = e => ( e < 18 ) ? "Sorry! You must be 18 or older!" : "You are good to go!" ;
// Problem 2 ) ---------------------------
const checkRaining = () => ( Math.random() < 0.5 ) ? "Get your rain jacket!" : "No rain on today's forecast!";
// Problem 3 ) ---------------------------
const checkEven = e => ( e % 2 == 0 ) ? "That's an even number!" : "That's an odd number!" ;
// Problem 4 ) ---------------------------
const checkGreatest = (x, y) => ( x == y ) ? `${x} is equal to ${y}` : ( x  >  y) ? `${x} is greater than ${y}` : `${x} is less than ${y}` ;
// ######################################



// ##### TESTS #####################
// Testing Under Age:  Sorry! You must be 18 or older!
console.log( "Testing Under Age: ", checkAge(16) );
// Testing Same Age: You are good to go!
console.log( "Testing Same Age:", checkAge(18) );
// Testing Over Age: You are good to go!
console.log( "Testing Over Age:", checkAge(19) );
// // Get your rain jacket!
console.log( "Random:", checkRaining() )
// // No rain on today's forecast!
console.log( "Random:", checkRaining() )
// Testing Even:  That's an even number!
console.log( "Testing Even: ", checkEven(16) );
// Testing Odd: That's an odd number!
console.log( "Testing Odd:", checkEven(19) );
// Testing Equal To: 18 is equal to 18
console.log( "Testing Equal To:", checkGreatest(18, 18) );
// Testing Less Than:  16 is less than 18
console.log( "Testing Less Than: ", checkGreatest(16, 18) );
// Testing Greater Than: 19 is greater than 18
console.log( "Testing Greater Than:", checkGreatest(19, 18) );
// ######################################





