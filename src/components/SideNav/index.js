import React from "react";
import styles from "./styles";

import { Paper, MenuItem, MenuList, Box } from "@mui/material";

function SideNav() {
  return (
    <Box sx={styles.box}>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>Heyduia</MenuItem>
        </MenuList>
      </Paper>
    </Box>
  );
}

export default SideNav;
