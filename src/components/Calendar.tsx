import React, {useState} from 'react';
import Calendar, { DateCallback } from 'react-calendar'
import './../App.css'

const Cal = () => {
    function highLighter():any{
        console.log('clicked')
    }
    return (
        <div id='cal'>
        <Calendar onClickDay={() => highLighter()}/>
        </div>
    )
}

export default Cal
