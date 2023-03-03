import { PlantsProvider } from "@grow-up/ui";
import { FC } from "react";

interface ProviderProps {
  children: JSX.Element;
}

export const Providers: FC<ProviderProps> = ({ children }) => (
  <PlantsProvider>{children};</PlantsProvider>
);
