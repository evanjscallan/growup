import { CustomCalendar } from "./components/CustomCalendar";
import { PlantDropdown } from "./components/PlantDropdown";
import { DropdownOptionUI } from "./components/DropdownOptionUI";
import React, { useState } from 'react';
import type { FC, Dispatch, SetStateAction } from "react";
import "./App.css";


let plantInfo = {
  plantName: 'Rhodesian Eggplant',
  plantType: 'Poisonous edible plant.',
  plantDescription: 'The rhodesian eggplant is a species native to antartica. It is blue and has wings.',
  waterFreq: 1,
  plantWaterFreqDescription: 'Once Weekly',
  plantSunlightNeeds: "Medium",
  plantImg: 'https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
}

const App: FC = () => {
  //set plantInfo boolean in higher component for scaleability; pass as props
  let [plantUIDisplay, setPlantUIDisplay]: any = useState(false)
  let [plantName, setPlantName]: any = useState(plantInfo.plantName)
  let [plantDescription, setPlantDescription]: any = useState(plantInfo.plantDescription)
  let [plantWaterFreqDescription, setPlantWaterFreqDescription]: any = useState(plantInfo.plantWaterFreqDescription)
  let [plantSunlightNeeds, setPlantSunlightNeeds]: any = useState(plantInfo.plantSunlightNeeds)
  let [plantImg, setPlantImg]: any = useState(plantInfo.plantImg)

  return (
  <>
  <PlantDropdown
  plantUIDisplay={plantUIDisplay} 
  setPlantUIDisplay={setPlantUIDisplay}
  />

  {plantUIDisplay ?
   <DropdownOptionUI
    plantUIDisplay={plantUIDisplay} 
    setPlantUIDisplay={setPlantUIDisplay}
    plantName={plantName}
    plantDescription={plantDescription}
    plantWaterFreqDescription={plantWaterFreqDescription}
    plantSunlightNeeds={plantSunlightNeeds}
    plantImg={plantImg}
   /> :
    null}

  <CustomCalendar/>


  
  </>
  );
}

export default App;



/*data funnel:
multiple values from json or object:
plant {
    a: dfsj,
    b: sdflkj
    c: sdlkfj
}

pass in data into App.tsx
pass to plantdropdown as props
compare option value with plant id
if match, display UI containing all of the data that has that id

*/
