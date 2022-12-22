// var currentDay = document.querySelector("#currentDay");
var currentDay = $('#currentDay');

  var today = moment();
currentDay.text(today.format('dddd, MMMM Do'));

console.log("hello")