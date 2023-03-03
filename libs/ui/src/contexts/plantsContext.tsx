import axios from 'axios';
import { IPlant } from "@grow-up/types";
import { createContext, FC, ProviderProps, useEffect, useState } from "react";

interface PlantsContextValue {
  plants: IPlant[];
}

type PlantsProviderProps = Omit<
  ProviderProps<PlantsContextValue>,
  'value'
>;

const apiClient = axios.create({
  baseURL: process.env['NX_API_BASE_URL']
})

export const PlantsContext = createContext({} as PlantsContextValue);

export const PlantsProvider: FC<PlantsProviderProps> = ({ children }) => {
  const [plants, setPlants] = useState<IPlant[]>([])

  useEffect(() => {
    apiClient.get<IPlant[]>('/plants').then(response => setPlants(response.data))
  }, []);

  const contextValue = {
    plants,
  }

  return <PlantsContext.Provider value={contextValue}>{children}</PlantsContext.Provider>
}
