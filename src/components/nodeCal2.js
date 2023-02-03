let today = new Date()
let subsequentDays = new Date()


let arr = [1,2,3,4,5,6];


//today + 1 day
//then make today equal that day
//then progress


//if month is unique: Push array to array
let monthArr = []
monthArr.push(today.getDate())

for (let i=0; i<365; i++){
    subsequentDays.setDate(today.getDate() + 1)
    today = subsequentDays
    monthArr.push(today.getDate())
    
}

let indices = monthArr.map((e, j) => e == 1 ? j : '').filter(Number)

for (let x=0; x<indices.length; x++){
    monthArr.splice(indices[x])
   
}


console.log(monthArr)

