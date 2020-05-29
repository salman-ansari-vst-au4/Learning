let count = 0;

let timeOut = setTimeout(() => {
  console.log('SetTimeOut')
}, 3000)

clearTimeout(timeOut);

let interval = setInterval(() => {
  console.log('SetInterval')
  count++;
  if (count === 2) clearInterval(interval);
}, 2000)

// Event Stack(execute) | Event Table(wait) | Event Queue (ready to exucute)
// time specified is the minimum time it have to wait
// even if you gave time as 0 it will push to the event table and event queue and will exucute only if stack is empty