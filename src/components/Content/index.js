import React from "react";
import styles from "./styles";

import Graph1 from "../Graph1";
import Graph2 from "../Graph2";
import { Box } from "@mui/material";

export default function Content({ i }) {
  return <Box sx={styles.content}>{i % 2 === 0 ? <Graph1 /> : <Graph2 />}</Box>;
}
