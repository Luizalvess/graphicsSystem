import React from "react";
import { useModal, ModalType } from "@/shared";
import { HModal } from "./hModal";
import { Box, Fab } from "@mui/material";

interface ModalContainerProps {
  modalType: ModalType;
  title?: string;
  width?: string | number;
  height?: string | number;
  children: React.ReactNode;
  minimizedIcon: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  modalType,
  title,
  width = "auto",
  height = "auto",
  children,
  minimizedIcon,
}) => {
  const {
    isOpen,
    isMinimized,
    handleOpen,
    handleClose,
    handleMinimize,
    getMinimizedPosition,
  } = useModal(modalType);

  // Renderiza o botão minimizado se o modal estiver minimizado
  if (isMinimized) {
    const { bottom, right } = getMinimizedPosition();

    return (
      <Box
        sx={{
          position: "fixed",
          bottom,
          right,
          zIndex: 1000,
        }}
      >
        <Fab
          size="small"
          color="primary"
          onClick={handleOpen}
          sx={{ boxShadow: 3 }}
        >
          {minimizedIcon}
        </Fab>
      </Box>
    );
  }

  return (
    <>
      {/* Modal principal */}
      <HModal
        isOpen={isOpen}
        onClose={handleClose}
        onMinimize={handleMinimize}
        title={title}
        width={width}
        height={height}
      >
        {children}
      </HModal>
    </>
  );
};
