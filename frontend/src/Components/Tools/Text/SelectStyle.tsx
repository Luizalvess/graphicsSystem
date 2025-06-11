import { Select, SelectProps, styled, SelectChangeEvent } from "@mui/material";
import React from "react";

const StyledSelect = styled(Select)(({ theme }) => ({
  height: "35px",
  width: "18vw",
  letterSpacing: "2px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px", // Corrigi "corderRadius" para "borderRadius"
  boxShadow: theme.shadows[4],
  color: theme.palette.text.primary,
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
    // "& fieldset": {
    //   borderColor: "transparent",
    // },
    // "&:hover fieldset": {
    //   borderColor: "transparent",
    //   boxShadow: theme.shadows[4], // Neumorphism ao hover
    // },
    // "&.Mui-focused fieldset": {
    //   borderColor: "transparent",
    //   boxShadow: theme.shadows[4], // Neumorphism ao focar
    // },
  },
  // "& .MuiInputLabel-root": {
  //   color: theme.palette.text.primary, // Cor do label
  //   fontSize: "1.2rem",
  //   marginTop: "-7px",
  //   fontWeight: "100",
  //   textTransform: "uppercase",
  // },
  // "& .MuiInputLabel-root.Mui-focused": {
  //   color: theme.palette.text.primary, // Cor do label ao focar
  //   fontSize: "1.5rem",
  //   marginTop: "-11px",
  //   textTransform: "uppercase",
  //   fontWeight: "500",
  // },
}));

export const CustomSelect: React.FC<SelectProps> = (props) => {
  // Função onChange para capturar o valor selecionado
  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    if (props.onChange) {
      props.onChange(event, child);
    }
  };

  return <StyledSelect {...props} onChange={handleChange}></StyledSelect>;
};
