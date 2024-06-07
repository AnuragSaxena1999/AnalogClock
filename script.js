const hourHand = document.querySelector(".hour");
const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const btn = document.querySelector(".mode-switch")
const body = document.querySelector(".body");
const darkMode = () =>{
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        btn.innerText="Dark Mode";
     }else{
         body.classList.add("dark");
         btn.innerText="Light Mode";
     }
};

function updateTime() {
    let date = new Date();
    let sectodegree = (date.getSeconds() / 60) * 360;
    let mintodegree = (date.getMinutes() / 60) * 360;
    let hourtodegree = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${sectodegree}deg)`;
    minuteHand.style.transform = `rotate(${mintodegree}deg)`;
    hourHand.style.transform = `rotate(${hourtodegree}deg)`;
}
setInterval(updateTime , 1000);
updateTime();
