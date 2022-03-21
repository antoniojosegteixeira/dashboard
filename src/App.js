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
          {Array.from(Array(11).keys()).map((e, i) => {
            return (
              <Route key={i} path={`/${i}`} element={<Content i={i} />} exact />
            );
          })}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
