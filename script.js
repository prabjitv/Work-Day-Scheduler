// showing current date

var dateToday = moment();
var date = document.getElementById("currentDay");
date.innerHTML = dateToday.format("dddd, MMMM Do YYYY");



// when event field clicked
$("td").on("click", function (event) {

  // enterEvent = prompt("Please enter your event:");
  var event9 = document.getElementById("event9").textContent;
  localStorage.setItem("#event9", event9);
  var event10 = document.getElementById("event10").value;
  localStorage.setItem("#event10", event10);
  var event11 = document.getElementById("event11").value;
  localStorage.setItem("#event11", event11);
  var event12 = document.getElementById("event12").value;
  localStorage.setItem("#event12", event12);
  var event13 = document.getElementById("event13").value;
  localStorage.setItem("#event13", event13);
  var event14 = document.getElementById("event14").value;
  localStorage.setItem("#event14", event14);
  var event15 = document.getElementById("event15").value;
  localStorage.setItem("#event15", event15);
  var event16 = document.getElementById("event16").value;
  localStorage.setItem("#event16", event16);
  var event17 = document.getElementById("event17").value;
  localStorage.setItem("#event17", event17);

  // $(this).prev
});

// for (var i = 0; i < 15; i++) {
// }
// hourTesting = 
//   if (moment().hour() < ) {
//       $("tr").css("background-color", "beige");
//     }

