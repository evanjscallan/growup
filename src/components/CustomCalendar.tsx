import {
  generateCalendar,
  getCalendarOffset,
  getDate,
  getDateOrdinal,
  getDayOfWeek,
} from "../utils/calendar";
import React, { useState } from "react";
import type { FC } from "react";
import "./../App.css";
export const CustomCalendar: FC = () => {
  // const [style, setStyle] = useState("normal");
  const [activeCellDateString, setActiveCellDateString] = useState<
    string | null
  >(null);
  const dates = generateCalendar();

  const toggleActiveCell = (date: Date) => {
    const dateString = date.toISOString();
    if (activeCellDateString === dateString) {
      setActiveCellDateString(null);
    } else {
      setActiveCellDateString(dateString);
    }
  };

  return (
    <>
      <div>
        {[...dates.entries()].map(([year, months]) => (
          <div>
            <div className="yearClass">{year}</div>
            <div>
              {[...months.entries()].map(([month, days]) => (
                <div className="monthClass" key={month}>
                  <div>{month}</div>
                  <div className="monthy">
                    <div className="griddy">
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
                            <p className="text">{getDayOfWeek(day)}</p>
                            <p className="cell text bolded">
                              {date}
                              {getDateOrdinal(parseInt(date))}
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
