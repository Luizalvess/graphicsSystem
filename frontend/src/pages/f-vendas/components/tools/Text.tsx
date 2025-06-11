import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "40px",
  letterSpacing: "2px",
  backgroundColor: theme.palette.primary.main, // Cor de fundo
  borderRadius: "5px", // Arredondamento das bordas
  boxShadow: theme.shadows[4], // Neumorphism
  color: theme.palette.text.primary,
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    fontSize: "1.5rem",
    padding: "0 5px",
    color: theme.palette.text.primary,
    height: "40px",
    border: "none",
    "& input": {
      textTransform: "none",
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
      boxShadow: theme.shadows[4],
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
      boxShadow: theme.shadows[4],
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    marginTop: "-7px",
    fontWeight: "100",
    textTransform: "uppercase",
    fontFamily: "Arial",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.primary, // Cor do label ao focar
    fontSize: "1.5rem",
    marginTop: "0",
    textTransform: "uppercase",
    fontWeight: "500",
  },
}));

export const TextOs: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" {...props} />;
};
