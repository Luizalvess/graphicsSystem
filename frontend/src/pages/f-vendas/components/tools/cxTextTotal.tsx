import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "70px",
  letterSpacing: "2px",
  backgroundColor: theme.palette.primary.main, // Cor de fundo
  borderRadius: "5px", // Arredondamento das bordas
  boxShadow: theme.shadows[4], // Neumorphism
  color: theme.palette.text.primary,
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontSize: "3.3rem",
    padding: "0 5px",
    color: theme.palette.text.primary,
    height: "70px",
    border: "none",
    "& input": {
      textTransform: "none", // Força todo o texto a ser em caixa baixa
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
      boxShadow: theme.shadows[4], // Neumorphism ao hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
      boxShadow: theme.shadows[4], // Neumorphism ao focar
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary, // Cor do label
    fontSize: "1.2rem",
    marginTop: "-7px",
    fontWeight: "100",
    textTransform: "uppercase",
    fontFamily: "Arial",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.primary, // Cor do label ao focar
    fontSize: "1.5rem",
    marginTop: "-11px",
    textTransform: "uppercase",
    fontWeight: "500",
  },
}));

export const CxTextTotal: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" {...props} />;
};
