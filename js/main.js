
var secondsHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand');
var hoursHand = document.querySelector('.hour-hand')
function setDate(){
    var now = new Date();
    
    var seconds = now.getSeconds();
    console.log(seconds);
    var secondsDegrees = ((seconds/60)*360)+90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    var mins = now.getMinutes();
    var minutesDegrees = ((mins/60)*360)+90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    var hours = now.getHours();
    var hoursdegrees = ((hours/12)*360)+90;
    hoursHand.style.transform = `rotate(${hoursdegrees}deg)`;
}
setInterval(setDate,1000);