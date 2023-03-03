import React, { Dispatch, SetStateAction, FC } from "react";
import { usePlants } from "@grow-up/ui";

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
  const { plants } = usePlants();
  const displayPlantInfo = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        {plants.map((plant) => (
          <option value={plant.name}>{plant.name}</option>
        ))}
      </select>
    </>
  );
};
