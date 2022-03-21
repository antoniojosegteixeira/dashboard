import React from "react";
import "./styles.css";

import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import { Paper, MenuItem, MenuList, Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <TopBar />
      <SideNav />
    </Box>
  );
}

export default App;
