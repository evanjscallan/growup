import {
  EditModeButton,
  CustomCalendar,
  PlantDropdown,
  DropdownOptionUI,
  usePlants,
} from "@grow-up/ui";
import { ClearButton } from "libs/ui/src/components/ClearButton";
import { useState } from "react";
import type { FC } from "react";

import "./App.css";

export const App: FC = () => {
  //import from dummyData.json
  //next: find a way to map multiple plants to multiple drop-downs.

  const [plantUIDisplay, setPlantUIDisplay] = useState(false);
  const [editMode, setEditMode] = useState(false);
  //idea for pushing plant dates
  const [datesArr, setDatesArr]: any = useState([]);
  //for targeting drop down selection in DropdownOptionUI and updating based on chosen plant
  const [dropdownSelection, setDropdownSelection] = useState("");

  return (
    <div className="main">
      <EditModeButton editMode={editMode} setEditMode={setEditMode} />
      <PlantDropdown
        dropdownSelection={dropdownSelection}
        setDropdownSelection={setDropdownSelection}
        plantUIDisplay={plantUIDisplay}
        setPlantUIDisplay={setPlantUIDisplay}
      />
      <ClearButton datesArr={datesArr} setDatesArr={setDatesArr} />
      {plantUIDisplay && (
        <DropdownOptionUI
          dropdownSelection={dropdownSelection}
          setDropdownSelection={setDropdownSelection}
          plantUIDisplay={plantUIDisplay}
          setPlantUIDisplay={setPlantUIDisplay}
        />
      )}
      <div className={editMode ? "calendar-outer-edit" : "calendar-outer"}>
        <CustomCalendar
          editMode={editMode}
          setEditMode={setEditMode}
          datesArr={datesArr}
          setDatesArr={setDatesArr}
        />
      </div>
    </div>
  );
};

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
