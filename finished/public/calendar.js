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
   //* Wrap everything in a try/catch for error handling.
   try {
     const resp = await fetch(`http://localhost:3000/get-data`);
     
     //* if response status code is 200 'OK'
     if (resp.status === 200) {
       const data = await resp.json();
       const dataMap = data.map((rental) => {
         return {
           id: rental.id,
           calendarId: rental.properties.name,
           title: rental.properties.name,
           category: 'allday',
           dueDateClass: '',
           start: rental.properties.start_date,
           end: rental.properties.end_date,
         }
       });
   
       //* Testing to make sure your array of objects looks correct
       console.log(dataMap);
       
       //* Creating an overall calendar for each type of rental equipment, so the colors are different
       const calendars = [];
       dataMap.forEach(rental => {
         const avCalendars = 
           {
             id: rental.calendarId,
             name: rental.title,
             backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
           }
         calendars.push(avCalendars);     
       });
   
       //* Testing to make sure your array of objects looks correct
       console.log(calendars);
       
       //* Create Calendar instance
       const calendar = new Calendar('#calendar', {
         defaultView: 'month',
         calendars: calendars,
       });
   
       //* Add the individual events to calendar
       calendar.createEvents(dataMap);
   
       //* Heading above calendar to show month and year
       const month = calendar.getDate();
       document.getElementById('month-heading').innerHTML = `${new Date(month).toLocaleString('en-us',{month:'long', year:'numeric'})}`;
     } //* If response is not ok, thow an error 
     else {
       throw new Error(`Something went wrong: ${resp.statusText}`)
     }
     
   } 
   catch (error) {
       console.error(error);
       console.log('hi');
   }   
 }
 
 //* Always call your function.
 createCalendar();