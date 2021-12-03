function buy(a) {
    if (x.status == false) {
        alert("Please Sign in first!")
    } else {
        window.location.href = `/course/${a}/order`;

    }
}

// Set the date we're counting down to
var countDownDate = new Date("Dec 6, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = "Register Before: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
}, 1000);

var x = JSON.parse(localStorage.getItem("sign"));

if (x.status == true) {
    document.getElementById("checkSign").innerHTML = "MY CLASSROOM";
    document.getElementById("checkSign").href = "/myclassroom/get";

}