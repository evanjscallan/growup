import {
  generateCalendar,
  getCalendarOffset,
  getDate,
  getDateOrdinal,
  getDayOfWeek,
} from "../utils/calendar";
import ReactPaginate from 'react-paginate';
import React, { useState, useEffect } from "react";
import type { FC } from "react";
import "./../App.css";
import plants from './../utils/dummyData.json'
import anime from "animejs"
let plant = plants;
type Plant = {
  plant: any
}





export const CustomCalendar: FC = (plant: any) => {
  // const [style, setStyle] = useState("normal");
  const [activeCellDateString, setActiveCellDateString] = useState<
    string | null
  >(null);
  const dates = generateCalendar();

  let weekDays: any = ['Sun','Mon','Tues', 'Wed', 'Thurs', 'Fri', 'Sat', ]

    
  useEffect(() => {
  anime({
    targets: '.calendar-outer',
    opacity: 1,
    duration: 2000,
    delay: 100,
    easing: 'easeInSine',
    // All properties except 'scale' inherit 250ms delay
  });
},[1])

  

  //targets
  const toggleActiveCell = (date: Date) => {
    const dateString = date.toISOString();
   
    if (activeCellDateString === dateString) {
      setActiveCellDateString(null);
    } else {
      setActiveCellDateString(dateString);
      logCell(date, dateString)
    }
  };

  const logCell = (date:any, dateString: string):void => {
    if (date.toISOString() === dateString){
      console.log('clicked', date.toISOString())
    } else {
      console.log('no match')
    }
    

  }

  return (
    <>
      <div className='calendar-outer'>
        {[...dates.entries()].map(([year, months]) => (
          <div>
            <div className="yearClass">{year}</div>
            <div>

            <div className="table-header">
        
          </div>

              {[...months.entries()].map(([month, days]) => (
                <div className="monthClass" key={month}>
                  
                  <div>{month}</div>
                  <div className="monthy">
                 
                    <div className="griddy">
                      { weekDays.map((weekday: JSX.Element) => { return <div className="weekday"><p>{weekday}</p></div> })
                    }
                     
                      {
                        // This adds the empty cells before today's date to ensure that Sunday is always
                        // at the front of the calendar
                        [...Array(getCalendarOffset(days[0])).keys()].map(
                          () => (
                            <div className="cellBlock placeholder" />
                            
                          )
                        )
                      }
                      {days.map((day) => {
                        const date = getDate(day);
                        return (
                          
                          <div
                            key={day.toISOString()}
                            onClick={() => toggleActiveCell(day)}
                            className={`cellBlock ${
                              activeCellDateString === day.toISOString() ?
                              "active" : "inactive"
                            }`}
                          >
                            <p className="text"></p>
                            <p className="cell text bolded">
                              {date}
                              
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
