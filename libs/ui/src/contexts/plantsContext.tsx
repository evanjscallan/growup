import axios from "axios";
import { IPlant } from "@grow-up/types";
import { createContext, FC, ProviderProps, useEffect, useState } from "react";

interface PlantsContextValue {
  plants: IPlant[];
  updateWateringDates: (datesArr: string[], currentPlantId: string) => void;
  plantsThatNeedWatering: (datesArr: string[], currentPlantId: string) => void;
  wateringCalendar: Map<string, string[]>;
}

type PlantsProviderProps = Omit<ProviderProps<PlantsContextValue>, "value">;

const apiClient = axios.create({
  baseURL: process.env["NX_API_BASE_URL"],
});

export const PlantsContext = createContext({} as PlantsContextValue);

export const PlantsProvider: FC<PlantsProviderProps> = ({ children }) => {
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [matches, setMatches] = useState([]);
  const [wateringCalendar, setWateringCalendar] = useState<
    Map<string, string[]>
  >(new Map());

  useEffect(() => {
    const updatedCalendar = wateringCalendar;
    plants.forEach(({ name, wateringDates }) => {
      wateringDates.forEach((date) => {
        updatedCalendar.set(date, [
          ...new Set([...(wateringCalendar.get(date) ?? []), name]),
        ]);
      });
    });
    setWateringCalendar(updatedCalendar);
  }, [plants]);

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

  const plantsThatNeedWatering = (
    datesArr: string[],
    currentPlantId: string
  ) => {
    const matchesArr: any = [];
    const plant = apiClient.get<IPlant[]>("/plants").then((response) => {
      const plantMatches = [
        ...plants.filter((plant) => plant.wateringDates === datesArr),
      ];
      matchesArr.push(response.data);
      setMatches(matchesArr);
    });
  };

  const contextValue = {
    plants,
    updateWateringDates,
    plantsThatNeedWatering,
    wateringCalendar,
  };

  return (
    <PlantsContext.Provider value={contextValue}>
      {children}
    </PlantsContext.Provider>
  );
};
