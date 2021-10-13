const SecondHand = document.querySelector('.second-hand')
const MinHand = document.querySelector('.min-hand')
const HourHand = document.querySelector('.hour-hand')

const setDate = () =>{
  const now = new Date();
  const sec = now.getSeconds();
  const secDegree = (sec * 6) + 90;
  SecondHand.style.transform = `rotate(${secDegree}deg)`

  const min = now.getMinutes();
  const minDegree = (min * 6) + 90
  MinHand.style.transform = `rotate(${minDegree}deg)`
  
  const hour = now.getHours();
  let hour_ = hour % 12
  const hourDegree = (hour_ * 30) + 90
  HourHand.style.transform = `rotate(${hourDegree}deg)`
}
setInterval(setDate,1000)