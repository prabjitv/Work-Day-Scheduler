var currentTime = moment().format('HH:mm'); 
var workhrs = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var workhrsMil = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 
var event;
var save;
var eventInput;

document.getElementById('currentDay').innerHTML = "Current time: " + moment().format('LT') + " MST"; 
    
    if (JSON.parse(window.localStorage.getItem("event")) == null) { 
      event = ["","","","","","","","",""];
    }
    else if (JSON.parse(window.localStorage.getItem("event")) != null) {
      event = JSON.parse(window.localStorage.getItem("event")); 
    }

    for (var i = 0; i < 9; i++) { 
      var hourRow = $("<tr>").appendTo("table");
      var hour = $("<td>").text(workhrs[i]).appendTo(hourRow); 

      eventInput = $("<input/>").attr({ type: "text", class: "activity" }).appendTo(hourRow).attr({ "data-input": i }); 

      $(".activity[data-input=" + i + "]").attr("value", event[i]); 

      save = $("<button id=save class=submitBtn>Save</button>").appendTo(hourRow).attr("data-time", i); 

      if (parseInt(currentTime) < workhrsMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "lightgreen");
      }

      if (parseInt(currentTime) === workhrsMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "grey");
      }

      if (parseInt(currentTime) > workhrsMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "salmon");
      }
    }

    $(".submitBtn").on("click", function () { 
      var hourChoice = $(this).data("time"); 
      event[hourChoice] = ($(".activity[data-input=" + hourChoice + "]").val());
      window.localStorage.setItem("event", JSON.stringify(event));
      console.log(event);
    }); 


