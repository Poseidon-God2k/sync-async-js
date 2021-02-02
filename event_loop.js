// sync in js 
// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => when func first call -> first call push in stack
// |  First |   and execute 
// |________|
// Call Stack
// first = () => {
//     console.log("First")
// }

// first();

// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => After func first call finished then Final push in to stack
// |  Final |   and execute 
// |________|
// Call Stack

// console.log('Final')

// Output
// First
// Final


// Example Event loop multi thread with setTimeout () ansync in marco task in Event loop
console.log("First !")

// Function second() call after x000000 mili s
setTimeout(function second(){
    console.log('Time out !')
}, 00000)
// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => when func first call -> first call push in stack
// |  First |   and execute 
// |________|
// Call Stack


// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => when func finished -> second push into stack and encounter time
// | second |   push event queue
// |________|
// Call Stack

//  _________________________
//         |
//  second |
// ________|________________
// Event queue


// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => Final push into call stack no need second exits
// | Final  |   
// |________|
// Call Stack

// Then -> Event Queue push into stack -> print (Timeout)
console.log("Final !")


//Output print
// First !
// Final !
// Time out !



