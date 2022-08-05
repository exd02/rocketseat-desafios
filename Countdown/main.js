const timer = document.querySelector(".timer").children

const futureDate = new Date()
futureDate.setDate(futureDate.getDate()+1)
futureDate.setHours(0)
futureDate.setMinutes(0)
futureDate.setSeconds(0)

const timeInMiliseconds = [
  86400000, // Days
  3600000, // Hours
  60000, // Minutes
  1000 // Seconds
];

function changeTime() {
  let timeDiff = futureDate - new Date()
  let timeToLaunch = [0,0,0,0]

  // how much time it needs to launch
  for (let i=0; i<timeInMiliseconds.length; i++) {
    timeToLaunch[i] = Math.floor(timeDiff/timeInMiliseconds[i])
    timeDiff %= timeInMiliseconds[i]

    // format the numbers (eg. 1 to 01)
    if (timeToLaunch[i] < 10)
      timeToLaunch[i] = `0${timeToLaunch[i]}`
    
      // change the HTML
    timer[i].innerHTML = timeToLaunch[i]
  }
}

/* To stop the loop: clearInterval(intervalId) */
// Run the function every 1000ms
var intervalId = window.setInterval(function(){
  changeTime()
}, 1000);


