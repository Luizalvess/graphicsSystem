import { Box, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import MaximizeIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { ButtonBlack } from "..";
import { useEffect, useState } from "react";
import { FaRegWindowRestore } from "react-icons/fa6";

export const Header = () => {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    // Listener para verificar se a janela está maximizada
    window.electronAPI.onMaximizeChange((maximized: boolean) => {
      setIsMaximized(maximized);
    });

    // Cleanup
    return () => {
      window.electronAPI.removeMaximizeChangeListener();
    };
  }, []);

  const handleMinimize = () => {
    window.electronAPI.minimizeWindow();
  };

  const handleMaximize = () => {
    window.electronAPI.maximizeWindow();
  };

  const handleClose = () => {
    window.electronAPI.closeWindow();
  };

  return (
    <Box
      sx={{
        top: "0",
        width: "140px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.light",
        zIndex: "999",
        borderRadius: "20px",
        WebkitAppRegion: "no-drag",
        position: "absolute",
      }}
    >
      <Box
        top={"0"}
        left={"18px"}
        height={"50px"}
        width={"80px"}
        bgcolor={"primary.light"}
        position={"absolute"}
        sx={{
          transform: "translate3d(-50%, -50%, 0) rotate(-45deg)",
        }}
      />
      <Box
        top={"0"}
        right={"-50px"}
        height={"80px"}
        width={"40px"}
        bgcolor={"primary.light"}
        position={"absolute"}
        sx={{
          transform: "translate3d(-50%, -50%, 0) rotate(45deg)",
        }}
      />
      <Stack
        sx={{
          justifyContent: "center",
          display: "flex",
          height: "90%",
          alignItems: "center",
          flexDirection: "row",
          zIndex: "10",
          gap: "10px",
        }}
      >
        <ButtonBlack icon={MinimizeIcon} onClick={handleMinimize} />
        <IconButton
          onClick={handleMaximize}
          sx={{
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
          }}
        >
          {isMaximized ? <FaRegWindowRestore /> : <MaximizeIcon />}
        </IconButton>
        <ButtonBlack
          sx={{ "&:hover": { color: "red" } }}
          icon={CloseIcon}
          onClick={handleClose}
        />
      </Stack>
    </Box>
  );
};
