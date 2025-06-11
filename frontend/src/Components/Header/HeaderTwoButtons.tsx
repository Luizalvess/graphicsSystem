import { Box, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { ButtonBlack } from "@/Components";
import { useEffect } from "react";

export const HeaderTwoButtons = () => {
  useEffect(() => {
    // Cleanup
    return () => {
      window.electronAPI.removeMaximizeChangeListener();
    };
  }, []);

  const handleMinimize = () => {
    window.electronAPI.minimizeWindow();
  };

  const handleClose = () => {
    window.electronAPI.closeWindow();
  };

  return (
    <Box
      sx={{
        top: "0",
        width: "120px",
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
        top={"-5px"}
        left={"13px"}
        height={"62px"}
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
          gap: "15px",
        }}
      >
        <ButtonBlack icon={MinimizeIcon} onClick={handleMinimize} />
        <ButtonBlack
          sx={{ "&:hover": { color: "red" } }}
          icon={CloseIcon}
          onClick={handleClose}
        />
      </Stack>
    </Box>
  );
};
