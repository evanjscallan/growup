import {
  EditModeButton,
  CustomCalendar,
  getMockPlants,
  PlantDropdown,
  DropdownOptionUI,
} from "@grow-up/ui";
import { useState } from "react";
import type { FC } from "react";

import "./App.css";

const App: FC = () => {
  //import from dummyData.json
  //next: find a way to map multiple plants to multiple drop-downs.
  const plant: any = getMockPlants().persianShieldPlant;

  const plantInfo = {
    plantName: plant.plantName,
    plantType: plant.plantType,
    plantDescription: plant.plantDescription,
    plantWaterFreq: plant.plantWaterFreq,
    plantWaterFreqDescription: plant.plantWaterFreqDescription,
    plantSunlightNeeds: plant.plantSunlightNeeds,
    plantImg: plant.plantImg,
  };

  const [plantUIDisplay, setPlantUIDisplay]: any = useState(false);
  const [plantName, setPlantName]: any = useState(plantInfo.plantName);
  const [plantDescription, setPlantDescription]: any = useState(
    plantInfo.plantDescription
  );
  const [plantWaterFreqDescription, setPlantWaterFreqDescription]: any =
    useState(plantInfo.plantWaterFreqDescription);
  const [plantSunlightNeeds, setPlantSunlightNeeds]: any = useState(
    plantInfo.plantSunlightNeeds
  );
  const [plantImg, setPlantImg]: any = useState(plantInfo.plantImg);
  const [startDate, setStartDate]: any = useState(null);
  const [editMode, setEditMode]: any = useState(false);

  //for targeting drop down selection in DropdownOptionUI and updating based on chosen plant
  const [dropdownSelection, setDropdownSelection]: any = useState("");

  return (
    <div className="main">
      <EditModeButton editMode={editMode} setEditMode={setEditMode} />
      <PlantDropdown
        dropdownSelection={dropdownSelection}
        setDropdownSelection={setDropdownSelection}
        plantUIDisplay={plantUIDisplay}
        setPlantUIDisplay={setPlantUIDisplay}
      />

      {plantUIDisplay ? (
        <DropdownOptionUI
          dropdownSelection={dropdownSelection}
          setDropdownSelection={setDropdownSelection}
          plantUIDisplay={plantUIDisplay}
          setPlantUIDisplay={setPlantUIDisplay}
        />
      ) : null}
      <div className={editMode ? "calendar-outer-edit" : "calendar-outer"}>
        <CustomCalendar editMode={editMode} setEditMode={setEditMode} />
      </div>
    </div>
  );
};

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
