export const getDayOfWeek = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
};

export const getCalendarOffset = (date: Date) => {
  return date.getDay();
};

export const getDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
};

//works on the extension of the date
export const getDateOrdinal = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const generateCalendar = (): Map<number, Map<string, Date[]>> => {
  //start date
  let today = new Date();
  //following days
  const followingDays = new Date();
  const dateObjectsArray = [];
  //full year of today incrementing by 1
  for (let i = 0; i < 365; i++) {
    followingDays.setDate(today.getDate() + 1);
    //moves today over
    today = followingDays;
    dateObjectsArray.push(new Date(followingDays.toDateString()));
  }

  const organizedDates = new Map<number, Map<string, Date[]>>();
  dateObjectsArray.map((dateObj) => {
    const year = dateObj.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      dateObj
    );

    const existingYearMap: Map<string, Date[]> | undefined =
      organizedDates.get(year);

    // New year
    if (!existingYearMap) {
      const monthMap = new Map();
      monthMap.set(month, [dateObj]);
      organizedDates.set(year, monthMap);
    }
    // New month
    else if (!existingYearMap.get(month)) {
      const daysInMonth = [dateObj];
      existingYearMap.set(month, daysInMonth);
      organizedDates.set(year, existingYearMap);
    }
    // New day
    else {
      let daysInMonth = existingYearMap.get(month) ?? [];
      daysInMonth?.push(dateObj);
      existingYearMap.set(month, daysInMonth);
      organizedDates.set(year, existingYearMap);
    }
  });

  return organizedDates;
};



//The setDate() method changes the day of the month of a given Date instance, based on local time.
//console.log(`now getDate (after setting): ${now.getDate()}`)
//console.log(`now after set date: ${now}`)



