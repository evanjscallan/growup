import React, { useState, FC, Dispatch, SetStateAction } from 'react'
import './../App.css'
import svg from './../assets/close-circle.svg'




interface OptionProps {
    plantName: string,
    plantDescription: string,
    plantWaterFreqDescription: string,
    plantSunlightNeeds: string,
    plantImg: any,
    plantUIDisplay: any,
    setPlantUIDisplay: Dispatch<SetStateAction<any>>
    dropdownSelection: any,
    setDropdownSelection: Dispatch<SetStateAction<any>>
}



export const DropdownOptionUI: string | FC<OptionProps> = ({ plantName, plantDescription, 
    plantWaterFreqDescription, plantSunlightNeeds, plantImg, plantUIDisplay,
    setPlantUIDisplay, dropdownSelection, setDropdownSelection }) => {

        const hideUI = () => {
           setPlantUIDisplay(plantUIDisplay = false)
        }

    return(
        <div className='plant-info-modal'>
        <img className='plant-modal-close-out' onClick={hideUI} src={svg} alt='X'/>
        <h1>Plant Information for { plantName }</h1>
      
        <ul>
            <li><b>Name:</b> { plantName } </li>
            <li><b>Description:</b>  { plantDescription } </li>
            <li><b>Watering Frequency:</b> { plantWaterFreqDescription } </li>
            <li><b>Sunlight Needs:</b> { plantSunlightNeeds } </li>
            <div>
                <img className='plant-image' src={plantImg} alt='image of rhodesian eggplant' width='300'/>
            </div>
       </ul>
       </div>
    )
}

