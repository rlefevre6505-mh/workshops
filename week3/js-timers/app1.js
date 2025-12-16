console.log("Hello!");

//Timers: after timer runs out, an action happens
//Intervals: an action repeats after a set period (unless it is stopped)

//EXAMPLES:

//timeout
//setTimeout(function () {
//action to execute goes here
//  } delay goes here
//);

//TODO: log message ot console after 5 seconds
setTimeout(function () {
  console.log("5 seconds has passed!");
}, 5000); //5000 milliseconds

// interval
// setInterval(function(){
//acion to perform goes here
// }, delay goes here)

//TODO: set a reminder for myslef to drink water every 3 seconds
setInterval(function () {
  console.log("drink some water!");
}, 3 * 1000);

//NOTE: Timers are async! this is relevant with other frameworks

//NOTE: CTRL + C to stop script running in terminal

//we can combine both kinds of timers
// TODO: remind myself to pay rent every 2 seconds for a span of 10 seconds

const rentReminder = setInterval(function () {
  console.log("pay rent!!!!");
}, 2000);

setTimeout(function () {
  clearInterval(rentReminder);
  //clearInterval stop the specified interval
}, 10001); //this will run only 4 times (2000ms, 4000ms, 6000ms, 8000ms)
