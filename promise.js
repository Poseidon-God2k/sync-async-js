//Promise in js
//define :


//
//
//      Promises                |        Callbacks                                      |
//  Promise is nature function  |   callback high order function                        |
// run loadScript(script) and   |   when call loadScript(script, callback)              |
// .then() to handle result     |   callback will completed before loadScript is called |
//---------------------------------------------------------------------------------------
// Can .then() many times       | Can be only one callback


//      new Promise(executor)
//           ___________________
//          |                   |
//          | state: "pending"  |
//          | result: undefined |
//          |___________________|
//            /             \
//         successed        failed
//      (resolve(value))     (reject(error))
//         /                   \
// _______/____________         \___________________
// |                   |        |                   |
// | state: "fulfilled"|        | state: "rejected" |
// | result: value     |        | result: error     |
// |___________________|        |___________________|



//Test promise in js

function alert(value){
    console.log(value)
}
// let promise = new Promise((resolve, reject) => {
//     resolve("Done!")
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
  
// .catch(f) is the same as promise.then(null, f)
// promise.catch(alert); // shows "Error: Whoops!" after 1 second

// promise.then(
//     result=> alert(result), // alert result when done 
//     error => alert(error) // alert error when whoop!
// )
// OK



// Test promise in async
// Chaining Promise

const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'VNG',
      location: 'Distric 3',
      table:    10
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});

const orderUber = function(dateDetails){
    return new Promise(function(resolve, reject){
        const message = `Get me an Uber ${dateDetails.location} in company ${dateDetails.name}, we are going on a date`;
        resolve(message)
        setTimeout(()=>{
            reject(new Error("No date details!!!"))
        },1000)
    })
}

const myDate = function(){
    date
    .then(orderUber)
    .then(function(done){
        console.log(done)
    })
    .catch(function(error){
        console.log(error.message)
    })
}


myDate()


//In this example we can see
// When call myDate
// date function run after but myDate doesn't completed
// But in this example have chaining promise ( exec two or more asynchronous operation)
// this is function orderUber
// => myDate use 2 result of date and orderUber to depend developer
// handle in result of func