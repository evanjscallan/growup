import { CustomCalendar } from "./components/CustomCalendar";
import { PlantDropdown } from "./components/PlantDropdown";

import type { FC } from "react";

import "./App.css";

const App: FC = () => {
  return (
  <>
  <PlantDropdown/>
  <CustomCalendar />
  </>
  );
}

export default App;
