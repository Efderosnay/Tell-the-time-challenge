const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");


function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondsDegrees = ((second/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute/60)*360) + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);