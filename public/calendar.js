/**
 * * ES6 module in Node.js environment
 * * These import the JS and CSS for the front-end.
 */
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import './css/style.css'

/**
 * * Here, we're creating a function called createCalendar(). This function: 
 * * 1.) calls the data GET data from our /get-data route.
 * * 2.) Creates an array of objects to turn the data we receive from HubSpot into one useable by the Calendar library.
 * * 3.) Loops over the array to create another array of objects to instantiate different colored calendars for each custom object data. 
 * * 4.) Instantiates the calendar.
 */
async function createCalendar() {
  //TODO: Wrap everything in a try/catch for error handling.

  //TODO: Fetch the data from /get-data

  //TODO: Write an if statment to await response status code of 200 'OK'

  //TODO: Create calendar instance 

  //TODO: Add the individual events to the calendar

  //TODO: Add heading above calendar to show month and year
}

//* Always call your function.
createCalendar();