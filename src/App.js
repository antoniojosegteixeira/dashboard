import React from "react";
import "./base.css";
import styles from "./styles.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={styles.container}>
        <TopBar />
        <SideNav />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/1" element={<Content />} />
          <Route path="/2" element={<Content />} />
          <Route path="/3" element={<Content />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
