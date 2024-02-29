import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Patients from "./pages/Patients";
import Notes from "./pages/Notes";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Patients />} />
            <Route path="/:id" element={<Notes />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CssBaseline />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
