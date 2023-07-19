var saveButtonEl = $(".saveBtn");

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
  //present
  if(currentHour === i){
    textarea.addClass("present")
  }
  //past
  else if (currentHour > i){
    textarea.addClass("past")
  }
  //future
  else {
    textarea.addClass("future")
  }
}