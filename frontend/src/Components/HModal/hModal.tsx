import { ButtonBlack } from "@/Components";
import { Box, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { ReactNode } from "react";

interface HModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  title?: string;
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
}

export const HModal = ({
  isOpen,
  onClose,
  onMinimize,
  title,
  children,
  width = "auto",
  height = "auto",
}: HModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onMinimize}
      arial-labelledby="modal-title"
      arial-describedby="modal-description"
    >
      <Box
        component={"body"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width,
          height,
          bgcolor: "background.default",
          padding: "8px",
          boxShadow: 8,
        }}
      >
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
          borderRadius={"15px"}
          bgcolor={"primary.main"}
          flexDirection={"column"}
          position={"relative"}
        >
          {/* Barra titulo */}
          <Box
            component={"header"}
            top={"3px"}
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            height={"5%"}
            marginBottom={"20px"}
          >
            <Stack
              sx={{
                top: "2px",
                width: "100px",
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "3px 10px",
                bgcolor: "primary.light",
                zIndex: "999",
                borderRadius: "20px",
                flexDirection: "row",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <ButtonBlack icon={MinimizeIcon} onClick={onMinimize} />
              <ButtonBlack icon={CloseIcon} onClick={onClose} />
            </Stack>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={"95%"}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
