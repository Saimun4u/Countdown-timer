const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021,3,25,11,30,0)
console.log(futureDate)

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()];

const month = months[futureDate.getMonth()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minutes}am`

//Set Countdown

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  //1s =1000ms
  //1m = 60s
  //1h = 60min
  //1day = 24hrs

  //Values in ms

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000

  //Calculate all values

  let days = t / oneDay;
  days = Math.floor(days);
  console.log(days)

  let hours = Math.floor((t % oneDay) /oneHour);
  let minutes = Math.floor((t % oneHour) /oneMin);
  let seconds = Math.floor((t % oneMin) /1000) 

  const values = [days, hours, minutes, seconds]

  function format(item){
    if(item < 0) {
      return (item = `0${item}`)
    }else{
      return item
    }
  }

  items.forEach((item, index)=>{
    item.innerHTML = format(values[index])
  })

}


getRemainingTime();