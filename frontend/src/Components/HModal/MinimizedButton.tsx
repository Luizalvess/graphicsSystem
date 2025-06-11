import { Paper, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface MinimizedButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  position?: {
    bottom?: string | number;
    right?: string | number;
    left?: string | number;
    top?: string | number;
  };
  sx?: SxProps<Theme>; // Adicione esta linha para aceitar propriedades sx
}

export const MinimizedButton = ({
  onClick,
  icon,
  position = { bottom: 20, right: 20 },
  sx = {}, // Valor padrão vazio para sx
}: MinimizedButtonProps) => {
  return (
    <Paper
      sx={{
        position: "fixed",
        ...position,
        width: "35px",
        height: "35px",
        cursor: "pointer",
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "text.primary",
        fontSize: "1.5rem",
        boxShadow: "8",
        zIndex: 999,
        "&:hover": {
          color: "text.secondary",
        },
        ...sx, // Mesclar com as propriedades sx personalizadas
      }}
      onClick={onClick}
    >
      {icon}
    </Paper>
  );
};
