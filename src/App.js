import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import { ThemeProvider, createTheme } from "@mui/material";
import ServiceAreas from "./pages/ServiceAreas/ServiceAreas";
import Contacts from "./pages/Contacts/Contacts";
import RefrigeratorRepair from "./pages/RefrigeratorRepair/RefrigeratorRepair";
import OvenRepair from "./pages/OvenRepair/OvenRepair";
import WashingMachineRepair from "./pages/WashingMachineRepair/WashingMachineRepair";
import DishwasherRepair from "./pages/DishwasherRepair/DishwasherRepair";
import DryerRepair from "./pages/DryerRepair/DryerRepair";
import MicrowaveOverRepair from "./pages/MicrowaveOvenRepair/MicrowaveOvenRepair";
import AirConditionRepair from "./pages/AirConditioningRepair/AirConditioningRepair";
import FurnaceRepair from "./pages/Furnace repair/FurnaceRepair";
import "./GlobalStyles.css";
import GarbageDisposalRepair from "./pages/GarbageDisposalRepair/GarbageDisposalRepair";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  const theme = createTheme({
    // Customize your theme as needed
    // See Material-UI documentation for available options: https://mui.com/customization/theming/
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contacts />} />
          <Route
            path="/service/refrigerator-repair"
            element={<RefrigeratorRepair />}
          />
          <Route path="/service/oven-repair" element={<OvenRepair />} />
          <Route
            path="/service/washing-machine-repair"
            element={<WashingMachineRepair />}
          />
          <Route
            path="/service/dishwasher-repair"
            element={<DishwasherRepair />}
          />
          <Route path="/service/dryer-repair" element={<DryerRepair />} />
          <Route
            path="/service/microwave-oven-repair"
            element={<MicrowaveOverRepair />}
          />
          <Route
            path="/service/air-conditioning-repair"
            element={<AirConditionRepair />}
          />
          <Route path="/service/furnace-repair" element={<FurnaceRepair />} />
          <Route
            path="/service/garbage-disposal-repair"
            element={<GarbageDisposalRepair />}
          />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
