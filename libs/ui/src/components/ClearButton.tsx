export const ClearButton = (props: any) => {
  const clearPlantsArr = () => {
    while (props.datesArr.length > 0) {
      props.datesArr.splice(0, props.datesArr.length);
    }
  };
  return <button onClick={clearPlantsArr}>Clear</button>;
};
