// countdown.js

// Set the date we're counting down to
var countDownDate = new Date("January 4, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
 
  // Find the distance between now and the count down date
  var distance = countDownDate - now; 
  // I changed the - to a + in this line to get time since we started dating
 
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  // If the count down is over, write some text 
//  if (distance < 0) {
//    clearInterval(x);
//    document.getElementById("countdown").innerHTML = "00:00:00";
//  }
}, 1000);
