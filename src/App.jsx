import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import ar from "date-fns/locale/ar-EG";

import ScrollToTop from "./components/ScrollToTop";

import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ar}>
        <ScrollToTop />
        <AppLayout />
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
