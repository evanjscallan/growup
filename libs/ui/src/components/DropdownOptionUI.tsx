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
          <EditModeButton
            editMode={editMode}
            setEditMode={setEditMode}
            datesArr={datesArr}
            currentPlantId={selectedPlant.id}
          />
          <ClearButton
            datesArr={datesArr}
            editMode={editMode}
            setDatesArr={setDatesArr}
          />
        </div>
      </div>
      <div className="plant-details">
        <Collapsible trigger="Image">
          <img className="plant-image" src={imageUri} alt={name} width="300" />
        </Collapsible>

        <Collapsible trigger="Description">
          <b>Description:</b> {description}
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
