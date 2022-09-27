/* ES6 module in Node.js environment */
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import './css/style.css'

// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import express from 'express'

async function createCalendar() {
  try {
    const resp = await fetch(`http://localhost:3000/get-data`);
    const data = await resp.json();
    console.log(data);  
    
    // Create Calendar instance
    const calendar = new Calendar('#calendar', {
      defaultView: 'month',
      calendars: [
        {
          id: 'cal1',
          name: 'AV Rental',
          backgroundColor: '#03bd9e',
        }
      ],
    });

    calendar.createEvents(
      // Create indiviaul events from /get-data
      data.map((rental) => {
        return {
          id: rental.id,
          calendarId: 'cal1',
          title: rental.properties.name,
          category: 'allday',
          dueDateClass: '',
          start: rental.properties.start_date,
          end: rental.properties.end_date,
        }
      })
    );
  } 
  catch (error) {
      console.error(error);
  }   
}

createCalendar();