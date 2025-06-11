import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const OffsetHistory: React.FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width={"100%"}
      height={"6.7%"}
      justifyContent={"space-between"}
      bgcolor={"primary.main"}
      borderRadius={"20px"}
      padding={" 10px 15px"}
    >
      <Stack
        height={"100%"}
        width={"100%"}
        display={"grid"}
        gridTemplateColumns={"3, 1fr"}
        gridTemplateRows={"6, 1fr"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "text.secondary",
            margin: "0 0 -30px 10px",
          }}
        >
          dolor fit bor
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "text.secondary",
            margin: "0 0 -30px 10px",
          }}
        >
          dolor fit bor
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "text.secondary",
            margin: "0 0 -30px 10px",
          }}
        >
          dolor fit bor
        </Typography>
        <Paper
          sx={{
            height: "76%",
            overflow: "hidden",
            borderRadius: 2,
            gridRow: "2 / 5",
            margin: "0 10px",
          }}
        >
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src="offsetRetro_Página_1.jpg"
            sx={{
              width: "100%",
              height: "100%",
              "& img": {
                objectFit: "cover",
              },
            }}
          />
        </Paper>
        <Paper
          sx={{
            height: "76%",
            overflow: "hidden",
            borderRadius: 2,
            gridRow: "2 / 5",
            margin: "0 10px",
          }}
        >
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src="offsetRetro_Página_2.jpg"
            sx={{
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          />
        </Paper>
        <Paper
          sx={{
            height: "76%",
            overflow: "hidden",
            borderRadius: 2,
            gridRow: "2 / 5",
            margin: "0 10px",
          }}
        >
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src="offsetRetro_Página_3.jpg"
            sx={{
              width: "100%",
              height: "100%",
              "& img": {
                objectFit: "cover",
              },
            }}
          />
        </Paper>
        <Typography
          variant="h6"
          sx={{
            textAlign: "justify",
            fontFamily: "futura, sans-serif",
            lineHeight: "25px",
            color: "primary.contrastText",
            margin: "-25px 10px 0 10px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. gdgede
          Soluta porro voluptatum laboriosam repellendus! Recusandae deserunt
          eos accusantium sequi iure? Consequatur, ad quae. Saepe beatae vel
          wsess modi reprehenderit assumenda, quas laboriosam! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quae sgdgg dduwdmj
          hh. Lorem, ipsum dolor adipisicing Soluta.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "justify",
            fontFamily: "futura, sans-serif",
            lineHeight: "25px",
            color: "primary.contrastText",
            margin: "-25px 10px 0 10px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. gdgede
          Soluta porro voluptatum laboriosam repellendus! Recusandae deserunt
          eos accusantium sequi iure? Consequatur, ad quae. Saepe beatae vel
          wsess modi reprehenderit assumenda, quas laboriosam! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quae sgdgg dduwdmj
          hh. Lorem, ipsum dolor adipisicing Soluta.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "justify",
            fontFamily: "futura, sans-serif",
            lineHeight: "25px",
            color: "primary.contrastText",
            margin: "-25px 10px 0 10px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. gdgede
          Soluta porro voluptatum laboriosam repellendus! Recusandae deserunt
          eos accusantium sequi iure? Consequatur, ad quae. Saepe beatae vel
          wsess modi reprehenderit assumenda, quas laboriosam! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quae sgdgg dduwdmj
          hh. Lorem, ipsum dolor adipisicing Soluta.
        </Typography>
      </Stack>
    </Box>
  );
};
