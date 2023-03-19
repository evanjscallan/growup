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
      <div className="plant-info-properties">
        <label htmlFor="plant-names"></label>
        <select
          value="select plant..."
          className="plant-dropdown"
          id="dropdown2"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            displayPlantInfo(event)
          }
          name="plant-names"
        >
          <option></option>
          {plants.map((plant) => (
            <option value={plant.name}>
              {plant.name ? plant.name : "select"}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
