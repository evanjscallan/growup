import { generateCalendar, getDate, getDayOfWeek } from "../utils/calendar";
import React, {useState} from 'react'
import type { FC } from 'react';
import './../App.css'
export const CustomCalendar: FC = () => {
  const [style, setStyle] = useState('normal')
  const [active, setActive] = useState(false)
  const dates = generateCalendar();

  const highlightOneCell = (e: any) => {
    setActive(!active)
    if (!active){
      e.target.className = 'clicked'
    }
    if (active){
      e.target.className = 'cellBlock'
    }
  }

  return (
    <>
    <div>
      {[...dates.entries()].map(([year, months]) => (
        <div>
          <div  className="yearClass">{year}</div>
          <div>
            {[...months.entries()].map(([month, days]) => (
              <div className='monthClass' key={month}>
                <div>{month}</div>
                <div className='monthy'>
                <div className='griddy' >
                  {days.map((day) => (
                    <div onClick={(e) => highlightOneCell(e)}  className='cellBlock' >
                      <p className='cell'>{getDate(day)}</p>
                    </div>
                  ))}
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
