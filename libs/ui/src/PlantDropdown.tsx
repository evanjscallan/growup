import React, { useState, Dispatch, SetStateAction, FC } from "react";
import plants from "./utils/dummyData.json";
import anime from "animejs";

interface PlantDropdownProps {
  plantUIDisplay: any;
  setPlantUIDisplay: Dispatch<SetStateAction<any>>;
  dropdownSelection: any;
  setDropdownSelection: Dispatch<SetStateAction<any>>;
}

type Plant = {
  plantName: string;
};

//props from App.tsx
export const PlantDropdown: FC<PlantDropdownProps> = ({
  plantUIDisplay,
  setPlantUIDisplay,
  dropdownSelection,
  setDropdownSelection,
}) => {
  const initialDropdownState = "";
  const displayPlantInfo = (event: any): any => {
    setPlantUIDisplay((plantUIDisplay = true));
    if (event.target.value === "") {
      setPlantUIDisplay((plantUIDisplay = false));
    } else {
      setDropdownSelection(event.target.value);
    }
  };

  return (
    <>
      <label htmlFor="plant-names">Select Plant</label>
      <select
        className="plant-dropdown"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          displayPlantInfo(event)
        }
        name="plant-names"
        id="plant-names"
      >
        <option value=""></option>
        {(Object.entries(plants) as [string, Plant][]).map((plant) => (
          <option value={plant[1].plantName}>{plant[1].plantName}</option>
        ))}
      </select>
    </>
  );
};