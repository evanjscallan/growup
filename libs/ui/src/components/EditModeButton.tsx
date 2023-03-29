import React, { FC, useState } from "react";
import { usePlants } from "../hooks/usePlants";

interface EditModeButton {
  datesArr: string[];
  currentPlantId: string;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

export const EditModeButton: FC<EditModeButton> = ({
  datesArr,
  setEditMode,
  currentPlantId,
  editMode,
}) => {
  const { updateWateringDates } = usePlants();
  const toggleEditMode = () => {
    if (editMode) {
      updateWateringDates(datesArr, currentPlantId);
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };
  return (
    <button onClick={() => toggleEditMode()}>
      {editMode ? "Confirm Selection(s)" : "Edit Watering Dates"}
    </button>
  );
};
