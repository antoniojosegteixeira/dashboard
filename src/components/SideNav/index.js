import React from "react";
import styles from "./styles";

import { Link } from "react-router-dom";
import {
  Paper,
  MenuItem,
  MenuList,
  Box,
  Typography,
  Icon,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";

function SideNav() {
  return (
    <Box sx={styles.box}>
      <MenuList sx={styles.menuWrapper}>
        {Array.from(Array(10).keys()).map((i) => {
          return (
            <MenuItem key={i} component={Link} to={`/${i}`}>
              <Icon sx={{ mr: 2, color: "#d7d7d7" }}>
                <HouseIcon />
              </Icon>
              <Typography color="gray" sx={styles.sidebarText}>
                Dashboard {i + 1}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Box>
  );
}

export default SideNav;
