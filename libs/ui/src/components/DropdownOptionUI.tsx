import { FC, Dispatch, SetStateAction } from "react";
import { usePlants } from "../hooks/usePlants";

interface DropdownOptionUIProps {
  plantUIDisplay: boolean;
  setPlantUIDisplay: Dispatch<SetStateAction<boolean>>;
  dropdownSelection: string;
  setDropdownSelection: Dispatch<SetStateAction<string>>;
}

export const DropdownOptionUI: FC<DropdownOptionUIProps> = ({
  plantUIDisplay,
  setPlantUIDisplay,
  dropdownSelection,
}) => {
  const { plants } = usePlants();

  const hideUI = () => {
    setPlantUIDisplay((plantUIDisplay = false));
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
      <h1>Plant Information for {name}</h1>
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
      </ul>
    </div>
  );
};
