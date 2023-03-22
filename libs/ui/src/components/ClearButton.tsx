export const ClearButton = (props: any) => {
  const clearPlantsArr = () => {
    props.setDatesArr([])
  };
  return <button onClick={clearPlantsArr}>Clear</button>;
};
