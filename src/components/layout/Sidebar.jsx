import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const { onClose, open } = props;

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => {
          onClose();
        }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={() => {
            onClose();
          }}
        >
          <List>
            {[{ title: "Patients", link: "/" }].map((text) => (
              <ListItem
                onClick={() => {
                  navigate(text.link);
                }}
                key={text.title}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
