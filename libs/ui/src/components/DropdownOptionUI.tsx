import { FC, Dispatch, SetStateAction } from "react";
import { usePlants } from "../hooks/usePlants";
import { EditModeButton } from "./EditModeButton";
import { ClearButton } from "./ClearButton";
interface DropdownOptionUIProps {
  plantUIDisplay: boolean;
  setPlantUIDisplay: Dispatch<SetStateAction<boolean>>;
  dropdownSelection: string;
  setDropdownSelection: Dispatch<SetStateAction<string>>;
  editMode: boolean;
  setEditMode: any;
  datesArr: string[];
  setDatesArr: Dispatch<SetStateAction<string[]>>;
}

export const DropdownOptionUI: FC<DropdownOptionUIProps> = ({
  plantUIDisplay,
  setPlantUIDisplay,
  dropdownSelection,
  editMode,
  setEditMode,
  datesArr,
  setDatesArr,
}) => {
  const { plants } = usePlants();

  const hideUI = () => {
    setPlantUIDisplay((plantUIDisplay = false));
    setEditMode(false);
  };

  const selectedPlant = plants.find(
    (plant) => plant.name === dropdownSelection
  );

  if (selectedPlant === undefined) {
    return null;
  }

  const { name, description, sunlight, imageUri, wateringDescription } =
    selectedPlant;

  return (
    <div className="plant-info-modal">
      <img
        className="plant-modal-close-out"
        onClick={hideUI}
        src={"./assets/close-circle.svg"}
        alt="X"
      />
      <h2>Plant Information for {name}</h2>
      <ul>
        <li>
          <b>Name:</b> {name}
        </li>
        <li>
          <b>Description:</b> {description}
        </li>
        <li>
          <b>Watering Frequency:</b> {wateringDescription}
        </li>
        <li>
          <b>Sunlight Needs:</b> {sunlight}
        </li>
        <div>
          <img className="plant-image" src={imageUri} alt={name} width="300" />
        </div>
        <EditModeButton editMode={editMode} setEditMode={setEditMode} />
        <ClearButton datesArr={datesArr} setDatesArr={setDatesArr} />
      </ul>
    </div>
  );
};
