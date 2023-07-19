// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl = $(".saveBtn");
var nineEl = $("#hour-9");
var tenEl = $("#hour-10");
var elevenEl = $("#hour-11");
var twelveEl = $("#hour-12");
var oneEl = $("#hour-1");
var twoEl = $("#hour-2");
var threeEl = $("#hour-3");
var fourEl = $("#hour-4");
var fiveEl = $("#hour-5");

saveButtonEl.on("click", function(event){
  var currentElement = event.target
  var textarea = $(currentElement).siblings("textarea")
  var parentId = $(currentElement).parent().attr("id")
  localStorage.setItem(parentId,textarea.val());
});
var currentHour = dayjs().hour()
var currentDay = $("#currentDay");
var currentTime = dayjs().format("dddd, MMMM D")
currentDay.text(currentTime)
for(i=9; i<18; i++){
  var parentId = $("#hour-"+i)
  var textarea = parentId.children("textarea")
  var saveEvent = localStorage.getItem ("hour-" + i)
  textarea.val(saveEvent)
  if(currentHour === i){
    textarea.addClass("present")
  }
  else if (currentHour > i){
    textarea.addClass("past")
  }
  else {
    textarea.addClass("future")
  }
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
