import { CustomCalendar } from "./components/CustomCalendar";
import { PlantDropdown } from "./components/PlantDropdown";
import { DropdownOptionUI } from "./components/DropdownOptionUI";
import plants from './utils/dummyData.json'
import React, { useState } from 'react';
import type { FC, Dispatch, SetStateAction } from "react";
import "./App.css";



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

  //for targeting drop down selection in DropdownOptionUI and updating based on chosen plant
  let [dropdownSelection, setDropdownSelection]: any = useState('')

  return (
  <div className='main'>
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
  <CustomCalendar/>
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
