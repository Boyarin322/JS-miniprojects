//js30 n2
const  secondsHand = document.querySelector('[data-seconds]');
const minutesHand = document.querySelector('[data-minutes]');
const hoursHand = document.querySelector('[data-hours]');
function setDate(){
    const timeNow = new Date();
    const nowSeconds = timeNow.getSeconds();
    const secondsInDeg = ((nowSeconds / 60) * 360)+90;
    secondsHand.style.transform = `rotate(${secondsInDeg}deg)`;

    const nowMinutes = timeNow.getMinutes();
    const minutesInDeg = ((nowMinutes / 60 ) * 360)+90;
    minutesHand.style.transform = `rotate(${minutesInDeg}deg)`;

    const nowHours = timeNow.getHours();
    const hoursInDeg = ((nowHours / 12) * 360)+90;
    hoursHand.style.transform = `rotate(${hoursInDeg}deg)`;
}
setInterval(setDate, 1000);