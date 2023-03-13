export const ClearButton = (props: any) => {
  const clearPlantsArr = () => {
    props.datesArr = [];
  };

  return <button onClick={clearPlantsArr}>Clear</button>;
};
