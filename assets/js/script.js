const today = moment();

var currentDay = $("#currentDay");

currentDay.text(today.format("dddd, MMMM Do"));

// function that will update block color depending on the current hour//
function trackTime() {
  var currentTime = moment().hour();
  // getting elements with class name time-block
  $(".time-block").each(function () {
    //getting id name from each element and turing it into an integer//
    var scheduleTime = parseInt($(this).attr("id"));

    //changing block color by removing and adding class name//
    if (scheduleTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    if (scheduleTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    if (scheduleTime > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

// getting text input and time from each element and saving it into local storage//
function saveSchedule() {
  $(".saveBtn").on("click", function () {
    var scheduleText = $(this).siblings(".description").val();
    console.log(scheduleText);
    var scheduleTime = $(this).parent().attr("id");
    console.log(scheduleTime);

    localStorage.setItem(scheduleTime, scheduleText);
  });
}

// Getting text item from local storage and putting it into appropriate location//
function getSchedule() {
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
}

saveSchedule();
trackTime();
getSchedule();
