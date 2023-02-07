import React from "react";
import "./App.css";
const queryClient = new QueryClient()
import MiniDrawer from "./components/miniDrawer";
import { QueryClient, QueryClientProvider } from 'react-query'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <MiniDrawer />
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
