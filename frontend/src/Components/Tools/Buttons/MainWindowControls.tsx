import React, { useEffect, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import MaximizeIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { FaRegWindowRestore } from "react-icons/fa";

export const MainWindowControls: React.FC = () => {
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

  const buttonCloseStyles = {
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    bgcolor: "primary.light",
    color: "primary.main",
    WebkitAppRegion: "no-drag",
    boxShadow: "2",
    "&:hover": {
      bgcolor: "secondary.light",
      transition: "0.6s",
      color: "red",
    },
    "&:active": {
      boxShadow: "5",
      transition: "0.8s",
    },
  };

  const buttonStyles = {
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    bgcolor: "primary.light",
    color: "primary.main",
    WebkitAppRegion: "no-drag",
    boxShadow: "2",
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
      <IconButton onClick={handleClose} sx={buttonCloseStyles}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};
