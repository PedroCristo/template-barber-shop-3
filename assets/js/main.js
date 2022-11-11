// Gets full year and display on the footer
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1
var time = date.getHours()

if (time >= 14) {
    var day = date.getDate() + 1
} else {
    var day = date.getDate()
}

var fullDate = year + "-" + month + "-" + day;

document.getElementById("outputYear").innerHTML =  year
document.getElementById("inputDate").min = fullDate


// Time alert function

function timeAlert() {
  document.getElementById("timeAlert").innerHTML = "Choose a time in between 9:00 am and 9:00 pm"
}




// Smooth scrolling to all links
$("a").on('click', function (e) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
    // End if
  });