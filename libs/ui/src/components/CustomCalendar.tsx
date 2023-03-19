import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
import anime from "animejs";

import {
  generateCalendar,
  getCalendarOffset,
  getDate,
  weekDays,
} from "@grow-up/ui";
import { DayOfWeek } from "@grow-up/types";

interface CustomCalendarProps {
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  datesArr: any;
  setDatesArr: any;
}

export const CustomCalendar: FC<CustomCalendarProps> = ({
  editMode,
  setEditMode,
  datesArr,
  setDatesArr,
}) => {
  const [activeCellDateString, setActiveCellDateString] = useState<
    string | null
  >(null);

  const dates = generateCalendar();

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

  console.log("calendar edit Mode state:", editMode);

  //targets
  const toggleActiveCell = (date: Date) => {
    const dateString = date.toISOString();

    if (activeCellDateString && dateString) {
      if (editMode) {
        datesArr.push(date.toDateString());
        setActiveCellDateString(dateString);
        console.log(datesArr);
      } else {
        return;
      }
    } else {
      setActiveCellDateString(dateString);
    }
  };

  const changeColor = (datesArr: any, day: any, e: any) => {
    anime({
      targets: day,
      backgroundColor: [
        { value: "#FFF" }, // Or #FFFFFF
        { value: "rgb(255, 0, 0)" },
        { value: "hsl(100, 60%, 60%)" },
      ],
      easing: "linear",
      direction: "alternate",
      duration: 200,
    });
  };

  const logCell = (date: any, dateString: string) => {
    if (date.toISOString() === dateString) {
      console.log("clicked", date.toISOString());
    } else {
      console.log("no match");
    }
  };

  return (
    <div className="cal">
      {[...dates.entries()].map(([year, months]) => (
        <div>
          <div>
            <div className="table-header"></div>

            {[...months.entries()].map(([month, days]) => (
              <div className="monthClass" key={month}>
                <div>
                  {month} {year}
                </div>
                <div className="monthy">
                  <div className="griddy">
                    {weekDays.map((weekday: DayOfWeek) => {
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
                          onMouseEnter={(e) => changeColor(datesArr, day, e)}
                          key={date}
                          onClick={() => toggleActiveCell(day)}
                          className={`cellBlock ${
                            datesArr.includes(day.toDateString())
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
