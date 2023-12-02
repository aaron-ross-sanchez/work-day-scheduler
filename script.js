// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function() {

  function updateDateTime() {
    var currentDay = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY hh:mm:ss A');

    currentDay.text(now);
  }

//________________________________________
  function getHour() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
      var blockId = $(this).attr('id');
      var blockHour = parseInt(blockId.split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past').removeClass('present future');
      } else if (blockHour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
      }
    });
  }

//________________________________________
  $(document).on('click', '.fa-save', function() {
    console.log('Save Clicked!');

    var rowId = $(this).closest('.time-block').data('row-id');
    var textArea = $(this).closest('.time-block').find('.description');
 
    var textValue = textArea.val();

    console.log('textValue', textValue);

    localStorage.setItem('savedText_' + rowId, textValue);
  });

  function savedEvent() {
    $('.time-block').each(function() {
      var rowId = $(this).data('row-id');
      var savedText = localStorage.getItem('savedText_' + rowId);
      
      if (savedText !== null && savedText !== undefined && savedText.trim() !== '') {
        $(this).find('.description').val(savedText);
      }
    });
  }


  updateDateTime();
  getHour();

  savedEvent();

  setInterval(updateDateTime, 1000);

});

$(document).ready(function() {
  var clearButton = $('<button>')
    .addClass('btn btn-clear')
    .text('Clear Events');

    clearButton.on('click', function() {
      localStorage.clear();
      console.log('clearButton clicked');

      $('.description').val('');
    });

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
