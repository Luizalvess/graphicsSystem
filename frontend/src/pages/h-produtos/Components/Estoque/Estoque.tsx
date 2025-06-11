import { Box } from "@mui/material";
import React from "react";

export const Estoque: React.FC = () => {
  return (
    <Box height={"100%"} padding={"10px 10px"} border={"2px solid #000"}>
      Estoque
      <Box width={"100%"} height={"20%"} padding={"10px 10px"}></Box>
      <Box width={"100%"} height={"80%"} padding={"10px 10px"}></Box>
    </Box>
  );
};
