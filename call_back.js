//Example callbacks js async

//##############################################################################################

//CALLBACK HELL issue complex nested callbacks
// Not error but difficult to read and fix code if 1 function nested error -> all function error

// function printString(string, callback){
//     setTimeout(()=>{
//         console.log(string)
//         callback()
//     },1000)
// }

// function printAll(){
//     printString("String A!",()=>{
//         printString("String B!",()=>{
//             printString("String C!",()=>{
//             })
//         })
//     })
// }

// printAll()



//#########################################################################################
//Callbacks to handle ansync 
// -----------------------------
// Usually: access values fro database, downloading images, reading files
// When 1 process is running after finished we can call another function to run and finished
// then process initate will run continue

// 1 type of high order function 
//---------------------------------



const fs = require('fs');

const request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback) // in line 46 when download complete will run function call back 
    // if not then terminate download function and no run call back
  });
};



// in this line you can see i run function download with callback = function =()=>{console.log('done')}
// Meaning when i run download then function download run but not finished this  run line 46
download('https://www.google.com/images/srpr/logo3w.png', './images/google.png', function(){
  console.log('done');
});

//=> this example overviews when using callback function then ansync because download function non finished then callback function run



