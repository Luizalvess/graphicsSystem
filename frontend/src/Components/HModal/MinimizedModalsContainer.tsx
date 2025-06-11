import React from "react";
import { Box } from "@mui/material";
import { useModals, ModalType } from "@/shared";
import { MinimizedButton } from "./MinimizedButton";
import { IoLogoWechat } from "react-icons/io5";
import { FaCalculator, FaCalendar, FaUserTie } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

// Mapeamento de tipos de modal para seus ícones
const modalIcons: Record<ModalType, React.ReactNode> = {
  calendar: <FaCalendar />,
  chat: <IoLogoWechat />,
  calculator: <FaCalculator />,
  settings: <IoSettings />,
  seller: <FaUserTie />,
};

export const MinimizedModalsContainer: React.FC = () => {
  const { modals, openModal, getMinimizedPosition } = useModals();

  // Filtra apenas os modais que estão minimizados
  const minimizedModals = Object.entries(modals)
    .filter(([_, state]) => state.isMinimized)
    .map(([type]) => type as ModalType);

  if (minimizedModals.length === 0) {
    return null; // Não renderiza nada se não houver modais minimizados
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none", // Permite clicar através do container
      }}
    >
      {minimizedModals.map((modalType) => (
        <MinimizedButton
          key={modalType}
          icon={modalIcons[modalType]}
          onClick={() => openModal(modalType)}
          position={getMinimizedPosition(modalType)}
          sx={{ pointerEvents: "auto" }} // Permite clicar no botão
        />
      ))}
    </Box>
  );
};
