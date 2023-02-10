export const getDayOfWeek = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { weekday: 'long' }).format(
    date
  );
}
const ahhh = new Intl.DateTimeFormat("en-US")
export const getDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { day: '2-digit' }).format(
    date
  );
}

export const generateCalendar = (): Map<number, Map<string, Date[]>> => {
  let today = new Date();
  const followingDays = new Date();
  const dateObjectsArray = [];
  for (let i = 0; i < 365; i++) {
    followingDays.setDate(today.getDate() + 1);
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
