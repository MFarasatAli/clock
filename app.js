function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // ampm
    let ampm;

    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // 12-hour format
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

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
        "December"
    ];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
   
   
    document.getElementById("time").textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    document.getElementById("day").textContent = day;

    document.getElementById("date").textContent = date + " " + month + " " + year;
}

updateClock();

setInterval(updateClock, 1000);