import { FC, Dispatch, SetStateAction } from "react";
import { usePlants } from "../hooks/usePlants";
import { EditModeButton } from "./EditModeButton";
import { ClearButton } from "./ClearButton";
import Collapsible from "react-collapsible";
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
  const MinusIcon = () => {
    return (
      <span className="panel__header-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14,9H2A1,1,0,0,1,2,7H14a1,1,0,0,1,0,2Z"
          />
        </svg>
      </span>
    );
  };

  const PlusIcon = () => {
    return (
      <span className="panel__header-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z"
          />
        </svg>
      </span>
    );
  };

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
      <div className="plant-title-img-buttons">
        <h2>Plant Information for {name}</h2>

        <div className="buttons">
          <EditModeButton editMode={editMode} setEditMode={setEditMode} />
          <ClearButton datesArr={datesArr} setDatesArr={setDatesArr} />
        </div>
      </div>
      <div className="plant-details">
        <Collapsible trigger="Image">
          <img className="plant-image" src={imageUri} alt={name} width="300" />
        </Collapsible>

        <Collapsible trigger="Description">
          <b>Description:</b> {description} <MinusIcon />
        </Collapsible>

        <Collapsible trigger="Watering Frequency">
          <b>Watering Frequency:</b> {wateringDescription}
        </Collapsible>

        <Collapsible trigger="Sunlight">
          <b>Sunlight Needs:</b> {sunlight}
        </Collapsible>
      </div>
    </div>
  );
};
