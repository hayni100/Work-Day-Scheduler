// var currentDay = document.querySelector("#currentDay");

const store = window.localStorage;
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

trackTime();
