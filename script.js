var currentTime = moment().format('HH:mm'); 
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var workHoursMil = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 
var schedule;
var saveBtn;
var activityInput;

document.getElementById('currentDay').innerHTML = "Current time: " + moment().format('LT') + " MST"; 
    
    if (JSON.parse(window.localStorage.getItem("schedule")) == null) { 
      schedule = ["","","","","","","","",""];
    }
    else if (JSON.parse(window.localStorage.getItem("schedule")) != null) {
      schedule = JSON.parse(window.localStorage.getItem("schedule")); 
    }

    for (var i = 0; i < 9; i++) { 
      var hourRow = $("<tr>").appendTo("table");
      var hour = $("<td>").text(workHours[i]).appendTo(hourRow); 

      activityInput = $("<input/>").attr({ type: "text", class: "activity" }).appendTo(hourRow).attr({ "data-input": i }); 

      $(".activity[data-input=" + i + "]").attr("value", schedule[i]); 

      saveBtn = $("<button id=save class=submitBtn>Save</button>").appendTo(hourRow).attr("data-time", i); 

      if (parseInt(currentTime) < workHoursMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "lightgreen");
      }

      if (parseInt(currentTime) === workHoursMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "grey");
      }

      if (parseInt(currentTime) > workHoursMil[i]) {
        $(".activity[data-input=" + i + "]").css("background-color", "salmon");
      }
    }

    $(".submitBtn").on("click", function () { 
      var hourChoice = $(this).data("time"); 
      schedule[hourChoice] = ($(".activity[data-input=" + hourChoice + "]").val());
      window.localStorage.setItem("schedule", JSON.stringify(schedule));
      console.log(schedule);
    }); 


