import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = (props) => {
  const { value, handleChange } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: 224,
        minWidth: 160,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="All notes" {...a11yProps(0)} />
        <Tab label="Recent notes" {...a11yProps(1)} />
      </Tabs>
    </Box>
  );
};

export default VerticalTabs;
