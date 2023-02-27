const today = moment();

var currentDay = $("#currentDay");

currentDay.text(today.format("dddd, MMMM Do"));

// function that will update block color depending on the current hour//
function trackTime() {
  var currentTime = moment().hour();

  // getting all elements with class name time-block = this//
  $(".time-block").each(function () {
    for (let i = 9; i < 18; i++) {
      //changing block color by removing and adding class name//
      if (i < currentTime) {
        $("#" + i).removeClass("future");
        $("#" + i).removeClass("present");
        $("#" + i).addClass("past");
      }
      if (i === currentTime) {
        $("#" + i).removeClass("past");
        $("#" + i).removeClass("future");
        $("#" + i).addClass("present");
      }
      if (i > currentTime) {
        $("#" + i).removeClass("present");
        $("#" + i).removeClass("past");
        $("#" + i).addClass("future");
      }
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


// This code block needs further investigation on why it doesn't work//

    // for (let i = 9; i < 18; i++) {

    //   let savedText = localStorage.getItem(i);
    //   console.log(savedText);

    //   $("#" + i + ".description").val(localStorage.getItem(savedText));
    // }

}

getSchedule();
saveSchedule();
trackTime();

