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
first = () => {
    console.log("First")
}

first();

// |        |
// |        |
// |        |
// |        |
// |        |
// |        | => After func first call finished then Final push in to stack
// |  Final |   and execute 
// |________|
// Call Stack

console.log('Final')

// Output
// First
// Final