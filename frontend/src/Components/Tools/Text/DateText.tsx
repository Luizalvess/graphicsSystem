import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "35px",
  width: "17%",
  letterSpacing: "2px",
  backgroundColor: theme.palette.primary.main, // Cor de fundo
  borderRadius: "20px", // Arredondamento das bordas
  boxShadow: theme.shadows[4], // Neumorphism
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontSize: "1.3rem",
    padding: "0 5px",
    color: theme.palette.text.primary,
    height: "35px",
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
    color: "transparent", // Cor do label
    fontSize: "1.2rem",
    marginTop: "-7px",
    fontWeight: "100",
    textTransform: "uppercase",
    fontFamily: "Arial",
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiInputLabel-shrink":
    {
      color: theme.palette.text.primary, // Cor do label ao focar
      fontSize: "1.5rem",
      marginTop: "-11px",
      textTransform: "uppercase",
      fontWeight: "500",
    },
}));

export const DateTextField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" {...props} />;
};
