import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import ar from "date-fns/locale/ar-EG";

// css
import "react-toastify/dist/ReactToastify.css";

// components
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "@/components/Context/Context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ScrollToTop from "@/components/ScrollToTop";
import AppLayout from "@/layout/AppLayout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ar}>
          <ScrollToTop />
          <AppLayout />
          <ToastContainer />
        </LocalizationProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
