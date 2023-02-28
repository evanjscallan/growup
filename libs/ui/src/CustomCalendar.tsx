import {
  generateCalendar,
  getCalendarOffset,
  getDate,
} from "./utils/calendar";
import { useState, useEffect } from "react";
import type { FC } from "react";
import anime from "animejs";

type Plant = {
  plant: any
  editMode: boolean,
  setEditMode: boolean
}

export const CustomCalendar: any = (editMode: any, setEditMode: any): any => {
  // const [style, setStyle] = useState("normal");
  const [activeCellDateString, setActiveCellDateString] = useState<
    string | null
  >(null);
  const dates = generateCalendar();

  const weekDays: any = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  useEffect(() => {
    anime({
      targets: ".calendar-outer",
      opacity: 1,
      duration: 2000,
      delay: 100,
      easing: "easeInSine",
      // All properties except 'scale' inherit 250ms delay
    });
  }, [1]);

  console.log('calendar edit Mode state:', editMode)

  //targets
  const toggleActiveCell = (date: Date) => {
    const dateString = date.toISOString();

    if (activeCellDateString === dateString) {
      setActiveCellDateString(null);
    } else {
      setActiveCellDateString(dateString);
      logCell(date, dateString);
    }
  };

  const logCell = (date: any, dateString: string): void => {
    if (date.toISOString() === dateString) {
      console.log("clicked", date.toISOString());
    } else {
      console.log("no match");
    }
  };

  return (
    <div>
      {[...dates.entries()].map(([year, months]) => (
        <div>
          <div className="yearClass">{year}</div>
          <div>
            <div className="table-header"></div>

            {[...months.entries()].map(([month, days]) => (
              <div className="monthClass" key={month}>
                <div>{month}</div>
                <div className="monthy">
                  <div className="griddy">
                    {weekDays.map((weekday: JSX.Element) => {
                      return (
                        <div className="weekday">
                          <p>{weekday}</p>
                        </div>
                      );
                    })}

                    {
                      // This adds the empty cells before today's date to ensure that Sunday is always
                      // at the front of the calendar
                      [...Array(getCalendarOffset(days[0])).keys()].map(() => (
                        <div className="cellBlock placeholder" />
                      ))
                    }
                    {days.map((day) => {
                      const date = getDate(day);
                      return (
                        <div
                          key={day.toISOString()}
                          onClick={() => toggleActiveCell(day)}
                          className={`cellBlock ${
                            activeCellDateString === day.toISOString()
                              ? "active"
                              : "inactive"
                          }`}
                        >
                          <p className="text"></p>
                          <p className="cell text bolded">{date}</p>
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
  );
};