import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type PasswordProps = TextFieldProps; // Define as propriedades como tipo

export const Password: React.FC<PasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      {...props} // Passa todas as props recebidas para o TextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...props.InputProps, // Preserva InputProps já passados
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={{
                marginRight: "1px",
                color: "text.primary",
              }}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: "330px",
        height: "35px",
        letterSpacing: "2px",
        bgcolor: "primary.main", // Cor de fundo
        borderRadius: "20px", // Arredondamento das bordas
        boxShadow: "4", // Neumorphism
        textTransform: "lowercase", // Garante que o texto fique em caixa baixa
        color: "text.primary",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          fontSize: "1.3rem",
          padding: "0 5px",
          color: "text.primary",
          height: "35px",
          border: "none",
          textTransform: "none", // Garante que o texto fique em caixa baixa
          "& input": {
            textTransform: "none", // Força todo o texto a ser em caixa baixa
          },
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
            boxShadow: "4", // Neumorphism ao hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
            boxShadow: "4", // Neumorphism ao focar
          },
        },
        "& .MuiInputLabel-root": {
          color: "text.primary", // Cor do label ao focar
          fontSize: "1.2rem",
          marginTop: "-7px",
          fontWeight: "100",
          textTransform: "uppercase",
          fontFamily: "Arial",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "text.primary", // Cor do label ao focar
          fontSize: "1.5rem",
          marginTop: "-11px",
          textTransform: "uppercase",
          fontWeight: "500",
        },
        ...props.sx, // Permite a sobrescrita do estilo via props
      }}
    />
  );
};
