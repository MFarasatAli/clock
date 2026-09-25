function updateClock() {

    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // ampm
    var ampm;

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

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var months = [
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

    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
   
   
    document.getElementById("time").textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    document.getElementById("day").textContent = day;

    document.getElementById("date").textContent = date + " " + month + " " + year;
}

updateClock();

setInterval(updateClock, 1000);
