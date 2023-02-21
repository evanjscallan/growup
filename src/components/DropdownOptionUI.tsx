import React, { useState, FC, Dispatch, SetStateAction } from 'react'
import './../App.css'
import svg from './../assets/close-circle.svg'
import plants from './../utils/dummyData.json'
interface OptionProps {
    plantUIDisplay: any,
    setPlantUIDisplay: Dispatch<SetStateAction<any>>
    dropdownSelection: any,
    setDropdownSelection: Dispatch<SetStateAction<any>>
}
//
type Plant = {
    plantName: string
    plantDescription: string,
    plantSunlightNeeds: string,
    plantImg: string,
    plantWaterFreqDescription: string

}

export const DropdownOptionUI: string | FC<OptionProps> = ({ plantUIDisplay,
    setPlantUIDisplay, dropdownSelection, setDropdownSelection }) => {
        const hideUI = () => {
           setPlantUIDisplay(plantUIDisplay = false)
        }
        const selectedPlant = (Object.values(plants) as Plant[]).find((plant) => (
            plant.plantName === dropdownSelection
        ))
        if (selectedPlant === undefined){
            return null
        }

        const { plantName, plantDescription,plantSunlightNeeds, plantImg, plantWaterFreqDescription } = selectedPlant
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

