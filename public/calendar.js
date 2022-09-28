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
    console.log(dataMap);

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

    console.log(calendars);
    
    // Create Calendar instance
    const calendar = new Calendar('#calendar', {
      defaultView: 'month',
      calendars: calendars,
    });

    calendar.createEvents(dataMap);
  } 
  catch (error) {
      console.error(error);
  }   
}

createCalendar();