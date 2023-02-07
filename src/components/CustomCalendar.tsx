import { generateCalendar, getDate, getDayOfWeek } from "../utils/calendar";

import type { FC } from 'react';

export const CustomCalendar: FC = () => {
  const dates = generateCalendar();



  return (
    <div>
      {[...dates.entries()].map(([year, months]) => (
        <div>
          <div style={{ width: '100%', textAlign: 'center', fontSize: 30, marginBottom: '4em' }}>{year}</div>
          <div>
            {[...months.entries()].map(([month, days]) => (
              <div key={month}>
                <div style={{ width: '100%', textAlign: 'center', fontSize: 24 }}>{month}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}>
                  {days.map((day) => (
                    <div style={{ display: 'flex', aspectRatio: '1 / 1', border: '1px solid black' }}>
                      <p>{getDayOfWeek(day)} - {getDate(day)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
