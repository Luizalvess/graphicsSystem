import React from "react";
import { Box, Typography } from "@mui/material";

// Utilitário para pegar data formatada
const getFormattedDate = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const weekday = today.toLocaleDateString("default", { weekday: "long" });

  return { day, month, year, weekday };
};

export const RoundCalendar: React.FC = () => {
  const { day, month, year, weekday } = getFormattedDate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 16,
        gap: "10px",
        color: "green",
        fontFamily: "ABSTER", // use a fonte que você carregou
        textAlign: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: "0.75rem",
          marginBottom: "4px",
        }}
      >
        {weekday}
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: 1 }}>
        {day}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ textTransform: "uppercase", fontSize: "0.85rem" }}
      >
        {month}
      </Typography>

      <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
        {year}
      </Typography>
    </Box>
  );
};
