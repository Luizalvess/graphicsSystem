import { ButtonBlack } from "@/Components";
import { Box, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { useState } from "react";

const fecharModal = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setMinimized: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpen(false);
  setMinimized(false);
};

const minimizarModal = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setMinimized: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setMinimized(true);
  setOpen(false);
};

export const LayoutBaseModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  return (
    <Box
      sx={{
        padding: "8px",
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          borderRadius: "15px",
          bgcolor: "primary.main",
          alignItems: "center",
          overflow: "hidden",
          border: "2px solid #000",
        }}
      >
        {/* Barra de titulos */}
        <Box
          sx={{
            height: "5%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            WebkitAppRegion: "drag",
            paddingTop: "10px",
          }}
        >
          {/* Botoes: Home e Menu */}
          <Box
            sx={{
              position: "absolute",
              top: "2.1%",
              left: "28px",
              width: "19.5%",
              height: " 5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "-15px",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                marginTop: "20px",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            ></Stack>
          </Box>

          <Box
            sx={{
              width: "100px",
              height: "40px",
              display: "flex",
              justifyContent: "space-between",
              padding: "3px 10px",
              bgcolor: "primary.light",
              zIndex: "999",
              borderRadius: "20px",
              overflow: "hidden",
              WebkitAppRegion: "no-drag",
            }}
          >
            <ButtonBlack
              icon={MinimizeIcon}
              onClick={() => fecharModal(setOpen, setMinimized)}
            />
            <ButtonBlack
              icon={CloseIcon}
              onClick={() => minimizarModal(setOpen, setMinimized)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "95%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export { fecharModal, minimizarModal };
