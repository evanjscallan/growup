import React, { useState } from "react";

export const EditModeButton = (props: any) => {
  const toggleEditMode = () => {
    props.setEditMode(!props.editMode);
    console.log(props.editMode);
  };
  return (
    <button onClick={() => toggleEditMode()}>
      {props.editMode ? "Confirm Selection(s)" : "Edit Watering Dates"}
    </button>
  );
};
