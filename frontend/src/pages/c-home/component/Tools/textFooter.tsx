import { Typography } from "@mui/material";
import React from "react";

interface TextFooterProps {
  children: React.ReactNode;
}

export const TextFooter: React.FC<TextFooterProps> = ({ children }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        letterSpacing: "1px",
        padding: "1px 0",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {children}
    </Typography>
  );
};
