/*
let months = {
    "January": 31,
    //for leap year
    "February": [28, 29],
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}


let dt = new Date()

let monthsKeys = Object.keys(months)
//console.log(monthsKeys)
let monthsValues = Object.values(months)
//console.log(monthsValues)

let monthDays = [];
let cal;
for (month in months){
    //get each key
    console.log(month)
    //get each value
    console.log(months[month])
   
}




//feed a variety of months
/*
function daysInMonth(month, year){
    let date = new Date(year, month, 1)
    //console.log('date', date)
    let days = [];

    //while the month you specify is true
    while (date.getMonth() === month){
        days.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }
    return days
}
//0 is january
let dayz;
let daysList = [];
for (let i=0; i<12; i++){
    //idea - make second argument chooseable by user
    dayz = daysInMonth(i, 2023 + i)
   // console.log(dayz[i].getMonth() + 1)
    
   daysList.push('<td/>' +  dayz + '</td>')

}
console.log(daysList)
*/


let today = new Date()
//console.log('today:', today)
let followingDays = new Date()
let arr = []
//console.log('following days:', followingDays)
for (i=0; i<365; i++){
    followingDays.setDate(today.getDate() + 1)
    today = followingDays
    arr.push(followingDays)
    
}
let obj = new Object(arr)
//console.log(obj)
//console.log(arr.sort())



const now = new Date()
//console.log(now)
//console.log(now.getTime())

const epoch = new Date(0)

const newwy1 = new Date(806015800000)
const newwy2 = new Date("July 4 1776 12:30");
const newwy3 = new Date(1776, 6, 4, 12, 30, 0)

const birthday = new Date(1991, 5, 13, 3, 24)
/*
get methods

console.log(birthday)
console.log(birthday.getFullYear())
console.log(birthday.getMonth())
console.log(birthday.getDay())
console.log(birthday.getHours())
console.log(birthday.getMinutes())
console.log(birthday.getSeconds())
console.log(birthday. getMilliseconds())
console.log(birthday.getTime())

if (today.getDate() === 13 && today.getMonth() === 5){
    console.log("It's your birthday.")
} else {
    console.log("It's not your birthday.")
}
*/

today.setFullYear(1991)
today.setMonth(5)
today.setDate(13)
console.log(today)



if (today.getDate() === 13 && today.getMonth() === 5){
    console.log("It's your birthday.")
} else {
    console.log("It's not your birthday.")
}


//0 = Sunday
//1 = Monday
//2 Tues
//3 Wed
//4 Thurs
//5 Fri
//6 Sat
//7 Sun

//loops: make for 100 years
//loops: make for 7 days + day name
//loops: make for [28,30,31] days depending on month index value (+ leap year value) + month name
