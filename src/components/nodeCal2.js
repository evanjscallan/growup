//let today = new Date()
//let subsequentDays = new Date()


//let arr = [1,2,3,4,5,6];


//today + 1 day
//then make today equal that day
//then progress


//if month is unique: Push array to array
/*
let monthArr = []
monthArr.push(today)

for (let i=0; i<365; i++){
    subsequentDays.setDate(today.getDate() + 1)
    today = subsequentDays
    monthArr.push(today)
    
}


}*/

let today = new Date();
const nextDate = new Date(today);
const arr = [];
Array.from([...Array(365).keys()].forEach(() => {
  nextDate.setDate(nextDate.getDate() + 1);
  arr.push(nextDate.toDateString());
  today = new Date(nextDate);
  console.log(today)
}));

const dateObjectsArray = arr.map(dateString => new Date(dateString))

console.log(dateObjectsArray)

/*
console.log(dateObjectsArray)
let obj = new Object(dateObjectsArray)

console.log(obj)

const organizedDates = new Map

dateObjectsArray.map(dateObj => {
  const year = dateObj.getYear()
  const month = dateObj.getMonth()

  const existingYearMap = organizedDates.get(year)

  if (!existingYearMap) {
    const monthMap = new Map()
    monthMap.set(month, [dateObj])
    organizedDates.set(year, monthMap)
  } else if (!existingYearMap.get(month)) {
    const monthMap = new Map()
    monthMap.set(month, [dateObj])
    existingYearMap.set(month, monthMap)
    organizedDates.set(year, existingYearMap)
   
  } else {
    const daysArr = existingYearMap.get(month)
    daysArr.push(dateObj)
    existingYearMap.set(month, daysArr)
    organizedDates.set(year, existingYearMap)
  }
})
*/


