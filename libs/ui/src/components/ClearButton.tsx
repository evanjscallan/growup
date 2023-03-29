export const ClearButton = (props: any) => {
  const clearPlantsArr = (): void | any => {
    if (props.editMode) {
      props.setDatesArr([]);
    } else {
      console.log("You must be in edit mode to clear the calendar.");
    }
  };
  return <button onClick={clearPlantsArr}>Clear</button>;
};
