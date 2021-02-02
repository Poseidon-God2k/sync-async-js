// Async and await easiest in all method ansync

// the word "async" write before function mean 
// function always return promise

// "await" use to js wait until that promise settles and return 
// result( type fulfilled in promise example)
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

async function myDate(){
    try{
        let dateDetails = await date;
        let message = await orderUber(dateDetails);
        console.log(message)
    }
    catch(error){
        console.log(error.message)
    }
}

//an anonymous async function

(async () =>{
    await myDate();
})();


//Create anonymous async function wait myDate() respone result
// and MyDate async await two function date and orderUber 
// wait date to orderUber use result promise of date