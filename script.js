//this inital function is for the majority of the JavaScript in this project
//it will run once the html is fully loaded
//used jQuery shortcut for this method

$(document).ready(function() {

  //this function will get the current time from dayjs,
  //replace the value of the variable currentDay with it,
  //which was defined using a jQuery shortcut to attach it to HTML
  function updateDateTime() {
    var currentDay = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY hh:mm:ss A');

    currentDay.text(now);
  }

  //this function will get the current hour and adjust the background accordingly
  function getHour() {
    var currentHour = dayjs().hour();

    //jQuery shortcut to get everything with .time-block and do this function to each of them
    $('.time-block').each(function() {
      //jQuery shortcut to get the ID attribute of element selected
      //this refers to the current element in the each() loop
      var blockId = $(this).attr('id');
      //the id that is being take is 'hour-#'
      //.split() method will separate the value of blockId, using the '-' as the separation point,
      //then it will take the element at index 1 of the array,
      //and turns it into an integer using parseInt
      var blockHour = parseInt(blockId.split('-')[1]);
      //ex. 'hour-9' turns into ['hour','9'] and we are left with '9'

      //conditional statement to change the background color of the textInput depending on the hour
      //the currentHour was defined at the beginning of the getHour function
      if (blockHour < currentHour) {
        //this still refers to the current element in the each() loop
        $(this).addClass('past').removeClass('present future');
      } else if (blockHour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
      }
    });
  }

  //jQuery shortcut for event listener
  //targeting elements with a 'fa-save' class
  //when those are clicked, the function below will run
  $(document).on('click', '.fa-save', function() {
    //test for myself in the console
    console.log('Save Clicked!');

    //this will get the closest parent with class 'time-block'
    //and get the data labeled as row-id inside that element with prev class
    var rowId = $(this).closest('.time-block').data('row-id');
    var textArea = $(this).closest('.time-block').find('.description');
 
    //the value of textArea will become the value of textValue
    var textValue = textArea.val();

    //test for correct pull
    console.log('textValue', textValue);

    //save that value to localStorage
    localStorage.setItem('savedText_' + rowId, textValue);
  });

  //this function will keep info from localStorage written to page
  function savedEvent() {
    //this will run for each element that has .time-block
    $('.time-block').each(function() {
      //get data from row-id in the current element from .time-block
      var rowId = $(this).data('row-id');
      //get data from localStorage
      var savedText = localStorage.getItem('savedText_' + rowId);
      
      //if there is actual data as the value, it will replace the value of .description in that specific element and replace it
      if (savedText !== null && savedText !== undefined && savedText.trim() !== '') {
        $(this).find('.description').val(savedText);
      }
    });
  }

  //runs the functions
  updateDateTime();
  getHour();
  savedEvent();

  //clock moves in one second intervals
  setInterval(updateDateTime, 1000);

});

//this function is the clear localStorage button
$(document).ready(function() {
  //create a variable using jQuery shortcut
  var clearButton = $('<button>')
    //add class to that button
    .addClass('btn btn-clear')
    //add text to that button
    .text('Clear Events');

    //jQuery shortcut for click event
    //when the clearButton element is clicked, function will run
    clearButton.on('click', function() {
      //will clear the localStorage
      localStorage.clear();
      //test for myself
      console.log('clearButton clicked');

      //will also 'clear' the value of the description,
      //by replacing value with empty string
      $('.description').val('');
    });

    //jQuery shortcut to select the header from HTML and add the button to the end of that element
    $('header').append(clearButton);
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
//  I believe this is already done with the HTML I added
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
//DONE________________________________________________________________

// WHEN I click into a time block
// THEN I can enter an event

// Already able to do that because of the textarea element
//DONE____________________________________________________________________

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// I would need to add an event listener for the buttons
// The function in that event listener will save it to local storage
// Do I need to write another function to have the button display what is in localStorage?
// If that's the case, do I need to have each button be a different class?
//DONE____________________________________________________________________

// WHEN I refresh the page
// THEN the saved events persist
// Maybe this is the part to display
//DONE____________________________________________________________________
