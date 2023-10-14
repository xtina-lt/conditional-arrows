


// Problem 1 ) ---------------------------
const checkAge = e => 
    ( e < 18 ) ? 
        "Sorry! You must be 18 or older!" : 
        "You are good to go!" ;

// // Testing Under Age:  Sorry! You must be 18 or older!
// console.log( "Testing Under Age: ", checkAge(16) );
// // Testing Same Age: You are good to go!
// console.log( "Testing Same Age:", checkAge(18) );
// // Testing Over Age: You are good to go!
// console.log( "Testing Over Age:", checkAge(19) );



/// Problem 2 ) ---------------------------
const checkRaining = () => 
     ( Math.random() < 0.5 ) ? 
        "Get your rain jacket!" : 
        "No rain on today's forecast!";


// // // Get your rain jacket!
// console.log( "Random:", checkRaining() )
// // // No rain on today's forecast!
// console.log( "Random:", checkRaining() )





// Problem 3 ) ---------------------------
const checkEven = e => 
    ( e % 2 == 0 ) ? 
        "That's an even number!" : 
        "That's an odd number!" ;

// // Testing Even:  That's an even number!
// console.log( "Testing Even: ", checkEven(16) );
// // Testing Odd: That's an odd number!
// console.log( "Testing Odd:", checkEven(19) );




// Problem 4 ) ---------------------------
const checkGreatest = (x, y) => {
    let result = ( x == y ) ? 
                    "is equal to" : 
                        // nest for greater or less than
                        ( x  > y) ?
                            "is greater than" :
                            // no condition needed
                            // when it isn't equal or greater 
                            // it has to be less 
                            `is less than` ;

    return `${x} ${result} ${y}`
}

// // Testing Equal To: 18 is equal to 18
// console.log( "Testing Equal To:", checkGreatest(18, 18) );
// // Testing Less Than:  16 is less than 18
// console.log( "Testing Less Than: ", checkGreatest(16, 18) );
// // Testing Greater Than: 19 is greater than 18
// console.log( "Testing Greater Than:", checkGreatest(19, 18) );



// Challange ) ---------------------------




