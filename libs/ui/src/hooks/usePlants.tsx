import { useContext } from "react";
import { PlantsContext } from "@grow-up/ui";

export const usePlants = () => useContext(PlantsContext);