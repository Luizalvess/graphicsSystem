import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "auto",
  letterSpacing: "2px",
  backgroundColor: theme.palette.primary.main, // Cor de fundo
  borderRadius: "15px", // Arredondamento das bordas
  boxShadow: theme.shadows[4], // Neumorphism
  color: theme.palette.text.primary,
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    fontSize: "1.3rem",
    padding: "15px 15px",
    color: theme.palette.text.primary,
    height: "auto",
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

export const CustomTextBox: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" {...props} />;
};
