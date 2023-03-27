import React from "react";
import { usePlants } from "../hooks/usePlants";

export const HoverHelp = () => {
  const { plantsThatNeedWatering }: any = usePlants();
  return (
    <>
      <div>
        <p>{plantsThatNeedWatering}</p>
      </div>
    </>
  );
};

//step one. Hover over individual cell, see what date it is
