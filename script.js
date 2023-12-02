// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function() {
  function updateDateTime() {
    var currentDay = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY hh:mm:ss A');

    currentDay.text(now);
  }

  updateDateTime();

  setInterval(updateDateTime, 1000);
});


$(function () {
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//PSUEDOCODE

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// How can I get the current day and time to be displayed/updating?
// What method gets the time
// How do I display it
//DONE____________________________________________________________

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
//I believe this is already done with the HTML I added
//DONE_____________________________________________________________

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// How can I get the time and block to interact
// if (time block (Hour) < current time (HH)) {
//  background color changes to past
// } else if (time block (hour) === curent time (HH)) {
//  backgroud color changes to present
// } else (time block(hour) > current time (HH)) {
//  background color changes to future
// }

// WHEN I click into a time block
// THEN I can enter an event

// Already able to do that because of the textarea element

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// I would need to add an event listener for the buttons
// The function in that event listener will save it to local storage
// Do I need to write another function to have the button display what is in localStorage?
// If that's the case, do I need to have each button be a different class?

// WHEN I refresh the page
// THEN the saved events persist
// Maybe this is the part to display