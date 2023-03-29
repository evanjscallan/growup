import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FC,
  useContext,
  useRef,
} from "react";
import anime from "animejs";
import { usePlants } from "@grow-up/ui";

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
  imageState: any;
  setImageState: any;
}

export const CustomCalendar: FC<CustomCalendarProps> = ({
  editMode,
  setEditMode,
  datesArr,
  setDatesArr,
  imageState,
  setImageState,
}) => {
  const [activeCellDateString, setActiveCellDateString] = useState<
    string | null
  >(null);
  const [showIcon, setShowIcon]: any = useState(false);
  let [highlightedDate, setHighlightedDate] = useState("");

  const dates = generateCalendar();
  const { plants, wateringCalendar } = usePlants();

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
    if (editMode) {
      const newDatesArr = [...datesArr];
      newDatesArr.push(date.toDateString());
      setDatesArr(newDatesArr);
      setActiveCellDateString(dateString);
    } else {
      setActiveCellDateString(dateString);
    }
  };

  const showPlantImageInCalendar = () => {};

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
                          key={date}
                          onClick={() => toggleActiveCell(day)}
                          className={`cellBlock ${
                            datesArr.includes(day.toDateString())
                              ? "active"
                              : "inactive"
                          }`}
                          style={{ position: "relative" }}
                        >
                          <p
                            className="cell text bolded"
                            style={{
                              position: "absolute",
                              top: ".5em",
                              left: ".5em",
                            }}
                          >
                            {date} <p className="text"></p>
                            {activeCellDateString
                              ? highlightedDate.toString()
                              : ""}
                          </p>

                          <div style={{ display: "flex" }}>
                            {(
                              wateringCalendar.get(day.toDateString()) ?? []
                            ).map((plantName: string) => {
                              const plant = plants.find(
                                (p) => p.name === plantName
                              );

                              if (plant) {
                                return (
                                  <img
                                    alt={plant.name}
                                    src={plant.imageUri}
                                    style={{
                                      borderRadius: "50%",
                                      width: 50,
                                      height: 50,
                                    }}
                                  />
                                );
                              }
                              return null;
                            })}
                          </div>
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
