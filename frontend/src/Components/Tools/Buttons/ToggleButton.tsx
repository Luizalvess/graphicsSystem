import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useAooThemeContext } from "@/shared";

// Estilo customizado para o ToggleButtonGroup
const CustomToggleButtonGroup = styled(ToggleButtonGroup)({
  height: "100%",
  width: "100%",
  overflow: "hidden", // Esconde bordas dos botões
  border: " none",
});

// Estilo customizado para cada ToggleButton
const CustomToggleButton = styled(ToggleButton)({
  "&.Mui-selected": {
    backgroundColor: "#1d1d1d", // Cor de fundo quando selecionado
    transition: "0.6s",
    border: "none",
    color: "#e6e6e6", // Cor do texto quando selecionado
    "&:hover": {
      backgroundColor: "#333333", // Cor de fundo ao passar o mouse quando selecionado
    },
  },
  "&:not(.Mui-selected)": {
    backgroundColor: "#e6e6e6", // Cor de fundo quando não selecionado
    border: "none",
    color: "#1d1d1d", // Cor do texto quando não selecionado
    "&:hover": {
      backgroundColor: "#fafafa", // Cor de fundo ao passar o mouse quando não selecionado
    },
  },
  borderRadius: 0, // Remove bordas arredondadas dos botões
  flex: 1, // Faz com que cada botão ocupe espaço igual
  padding: "8px 16px", // Espaçamento interno
});

export const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState("light");
  const { toggleTheme } = useAooThemeContext();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <CustomToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <CustomToggleButton
        onClick={toggleTheme}
        value="light"
        disabled={alignment === "light"}
      >
        <IoSunny />
      </CustomToggleButton>
      <CustomToggleButton
        onClick={toggleTheme}
        value="dark"
        disabled={alignment === "dark"}
      >
        <IoMoon />
      </CustomToggleButton>
    </CustomToggleButtonGroup>
  );
};
