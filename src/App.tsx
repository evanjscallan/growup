import { CustomCalendar } from "./components/CustomCalendar";
import { PlantDropdown } from "./components/PlantDropdown";
import { DropdownOptionUI } from "./components/DropdownOptionUI";
import plants from './utils/dummyData.json'
import React, { useState, useEffect } from 'react';
import type { FC, Dispatch, SetStateAction } from "react";
import "./App.css";
import anime from 'animejs'
import ReactPaginate from 'react-paginate';
import { EditModeButton } from './components/EditModeButton'



const App: FC = () => {
  


  //import from dummyData.json
  //next: find a way to map multiple plants to multiple drop-downs.
  let plant: any = plants.persianShieldPlant

  let plantInfo = {
    plantName: plant.plantName,
    plantType: plant.plantType,
    plantDescription: plant.plantDescription,
    plantWaterFreq: plant.plantWaterFreq,
    plantWaterFreqDescription: plant.plantWaterFreqDescription,
    plantSunlightNeeds: plant.plantSunlightNeeds,
    plantImg: plant.plantImg
  } 


  let [plantUIDisplay, setPlantUIDisplay]: any = useState(false)
  let [plantName, setPlantName]: any = useState(plantInfo.plantName)
  let [plantDescription, setPlantDescription]: any = useState(plantInfo.plantDescription)
  let [plantWaterFreqDescription, setPlantWaterFreqDescription]: any = useState(plantInfo.plantWaterFreqDescription)
  let [plantSunlightNeeds, setPlantSunlightNeeds]: any = useState(plantInfo.plantSunlightNeeds)
  let [plantImg, setPlantImg]: any = useState(plantInfo.plantImg)
  let [startDate, setStartDate]: any = useState(null)
  let [editMode, setEditMode]: any = useState(false)

  //for targeting drop down selection in DropdownOptionUI and updating based on chosen plant
  let [dropdownSelection, setDropdownSelection]: any = useState('')

  return (
  <div className='main'>
  <EditModeButton
      editMode={editMode}
      setEditMode={setEditMode}
  />
  <PlantDropdown
  dropdownSelection={dropdownSelection}
  setDropdownSelection={setDropdownSelection}
  plantUIDisplay={plantUIDisplay} 
  setPlantUIDisplay={setPlantUIDisplay}
  />

  {plantUIDisplay ?
   <DropdownOptionUI
    dropdownSelection={dropdownSelection}
    setDropdownSelection={setDropdownSelection}
   
    plantUIDisplay={plantUIDisplay} 
    setPlantUIDisplay={setPlantUIDisplay}
   /> : null}
   
  <div className={ editMode ? 'calendar-outer-edit'  : 'calendar-outer' }>
  <CustomCalendar
    editMode={editMode}
    setEditMode={setEditMode}
  />
  </div> 
  
  </div>

  );
}

export default App;



/* Additional Notes:
--Prospective Process--
pass in data into App.tsx
pass to plantdropdown as props
compare option value with plant id
if match, display UI containing all of the data that has that id
*/



/* 
Calendar - createDate = [false, true]
when createDate is true:
  -different UI for calendar to show difference
  -able to use a startDate function



*/
