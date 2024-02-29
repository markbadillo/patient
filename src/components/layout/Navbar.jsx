import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar";

const Root = styled("div")`
  flex-grow: 1;
  margin-bottom: 32px;
`;

const Title = styled(Typography)`
  flex-grow: 1;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Root>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Title
              onClick={() => {
                navigate("/");
              }}
              variant="h6"
              component="div"
            >
              Patients
            </Title>
          </Toolbar>
        </AppBar>
      </Root>
      <Sidebar open={open} onClose={onClose} />
    </>
  );
};

export default Navbar;
