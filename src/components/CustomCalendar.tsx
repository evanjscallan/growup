import React from 'react';






const CustomCalendar = (props:any): any | JSX.Element => {

    let months = ["January", "February", "March"]

    let today = new Date();
    const nextDate = new Date(today);
    const arr: string[] = [];
    [...Array(3).keys()].forEach(() => {
    nextDate.setDate(nextDate.getDate() + 1);
    arr.push(nextDate.toDateString());
    today = new Date(nextDate);
    console.log(today.getMonth())
    });


   
    const dateObjectsArray = arr.map(dateString =>
 
    <td>{dateString}</td>
   
    )

   
    return(
        <>
        <table>
            <tr>{dateObjectsArray}</tr>
        </table>
        </>
    )
}


export default CustomCalendar
