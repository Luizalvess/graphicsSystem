import React, { useEffect, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import MaximizeIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { FaRegWindowRestore } from "react-icons/fa";

export const WindowControls: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    const handleMaximizeChange = (maximized: boolean) => {
      setIsMaximized(maximized);
    };

    window.electronAPI.onMaximizeChange(handleMaximizeChange);

    return () => {
      window.electronAPI.removeMaximizeChangeListener();
    };
  }, []);

  const handleMinimize = () => window.electronAPI.minimizeWindow();
  const handleMaximize = () => window.electronAPI.maximizeWindow();
  const handleClose = () => window.electronAPI.closeWindow();

  const buttonStyles = {
    height: "35px",
    width: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "primary.light",
    color: "text.secondary",
    fontSize: "1.3rem",
    boxShadow: "2",
    WebkitAppRegion: "no-drag",
    "&:hover": {
      bgcolor: "secondary.light",
      transition: "0.6s",
    },
    "&:active": {
      boxShadow: "5",
      transition: "0.8s",
    },
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-around",
        display: "flex",
        width: "95%",
        height: "90%",
        alignItems: "center",
        webkitAppRegion: "no-drag",
        flexDirection: "row",
        zIndex: "10",
      }}
    >
      <IconButton
        onClick={handleMinimize}
        sx={{ ...buttonStyles, marginLeft: "3px" }}
      >
        <MinimizeIcon />
      </IconButton>
      <IconButton onClick={handleMaximize} sx={buttonStyles}>
        {isMaximized ? <FaRegWindowRestore /> : <MaximizeIcon />}
      </IconButton>
      <IconButton onClick={handleClose} sx={buttonStyles}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};
