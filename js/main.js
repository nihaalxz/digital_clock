let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");


setInterval(() => {
    let current_time = new Date();
    hours.innerHTML = (current_time.getHours() < 10 ? "0" : "") + current_time.getHours() + ":";
    minutes.innerHTML = (current_time.getMinutes() < 10 ? "0" : "") + current_time.getMinutes() + ":";
    seconds.innerHTML = (current_time.getSeconds() < 10 ? "0" : "") + current_time.getSeconds();
}, 1000);
