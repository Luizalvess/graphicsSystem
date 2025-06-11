import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

export const Loading: React.FC<{ message?: string }> = ({
  message = "Carregando...",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};
