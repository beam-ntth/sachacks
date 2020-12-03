function timer(date) {
    var end = new Date(date);
    console.log(end);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            return;
        }
        // var days = Math.floor(distance / _day);
        var hours = Math.floor(distance / _hour);
        var minutes = Math.floor(distance % _hour / _minute);
        var seconds = Math.floor(distance % _minute / _second);

        // document.getElementById('days').value = days < 10 ? "0" + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById('min').innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById('sec').innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    if (document.getElementById('hours') && document.getElementById('min') && document.getElementById('sec')) {
        timer = setInterval(showRemaining, 1000);
    }
}

$(document).ready(function () {
    var hackEnd = '02/23/2020 10:30:00 AM';
    timer(hackEnd);
});
