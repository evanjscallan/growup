export const ClearButton = (props: any) => {
  const clearPlantsArr = () => {
    while (props.datesArr.length > 1) {
      props.datesArr.splice(0, 1);
    }
  };

  return <button onClick={clearPlantsArr}>Clear</button>;
};
