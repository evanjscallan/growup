import axios from "axios";
import { IPlant } from "@grow-up/types";
import { createContext, FC, ProviderProps, useEffect, useState } from "react";

interface PlantsContextValue {
  plants: IPlant[];
  updateWateringDates: (datesArr: string[], currentPlantId: string) => void;
}

type PlantsProviderProps = Omit<ProviderProps<PlantsContextValue>, "value">;

const apiClient = axios.create({
  baseURL: process.env["NX_API_BASE_URL"],
});

export const PlantsContext = createContext({} as PlantsContextValue);

export const PlantsProvider: FC<PlantsProviderProps> = ({ children }) => {
  const [plants, setPlants] = useState<IPlant[]>([]);

  useEffect(() => {
    apiClient
      .get<IPlant[]>("/plants")
      .then((response) => setPlants(response.data));
  }, []);

  const updateWateringDates = (datesArr: string[], currentPlantId: string) => {
    const plant = plants.find((plant) => plant.id === currentPlantId);

    if (!plant) throw new Error();

    const updatedPlant: IPlant = {
      ...plant,
      wateringDates: datesArr,
    };

    delete updatedPlant["_id"];

    apiClient
      .put<IPlant>("/plants/" + currentPlantId, JSON.stringify(updatedPlant), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const updatedPlants = [
          ...plants.filter((plant) => plant.id !== currentPlantId),
        ];

        updatedPlants.push(response.data);

        setPlants(updatedPlants);
      });
  };

  const contextValue = {
    plants,
    updateWateringDates,
  };

  return (
    <PlantsContext.Provider value={contextValue}>
      {children}
    </PlantsContext.Provider>
  );
};
