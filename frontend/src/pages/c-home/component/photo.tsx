import { Paper, Stack, Box, Typography } from "@mui/material";
import React from "react";

export const Photo: React.FC = () => {
  return (
    <Box className="foto">
      <Stack
        sx={{
          width: "130px",
          height: "130px",
          display: "flex",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "50%",
          boxShadow: "1",
          "&:hover": {
            width: "130px",
            height: "190px",
            borderRadius: "0",
            boxShadow: "none",
            overflow: "visible",
            "& .Dados": {
              opacity: 1,
              visibility: "visible",
            },
          },
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: "0",
            padding: "10px",
            width: "130px ",
            height: "130px",
            borderRadius: "50%",
            bgcolor: "primary.main",
            boxShadow: "8",
            zIndex: "99",
            cursor: "pointer",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "primary.light",
              color: "primary.main",
            }}
          >
            Foto
          </Stack>
        </Paper>
        <Stack
          className="Dados"
          sx={{
            position: "absolute",
            bottom: "0",
            width: "126px ",
            height: "130px",
            borderRadius: "0 0 50% 50%",
            bgcolor: "primary.light",
            boxShadow: "8",
            opacity: 0,
            padding: "0 5px",
            paddingTop: "60px",
            visibility: "hidden",
            transition: "opacity 0.6s, visibility 0.6s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <Typography
            variant={"h5"}
            sx={{
              color: "primary.main",
            }}
          >
            Nome
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              color: "text.secondary",
            }}
          >
            Cargo
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
