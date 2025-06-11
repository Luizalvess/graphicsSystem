import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";

interface IPesquisaProps {
  textoDaBusca?: string;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
}

// Crie um componente estilizado com estilo de neomorfismo
const NeomorphicTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    marginTop: "-1px",
    width: "100%",
    height: "35px",
    paddingRight: "-5px",
    borderRadius: "12px",
    fontSize: "1.2rem",
    WebkitAppRegion: "no-drag",
    "& input": {
      textTransform: "none", // Força todo o texto a ser em caixa baixa
    },
    "& fieldset": {
      border: "none", // Remover borda padrão
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "text.primary", // Cor do placeholder
    opacity: 1, // Deixe o placeholder totalmente opaco
    fontWeight: "bold",
  },
});

export const SearchBox: React.FC<IPesquisaProps> = ({
  textoDaBusca = "",
  aoMudarTextoDeBusca,
}) => {
  return (
    <NeomorphicTextField
      type="search"
      placeholder="Pesquisar..."
      variant="outlined"
      value={textoDaBusca}
      onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{
              color: "text.primary",
            }}
          >
            <Fab
              variant="extended"
              size="small"
              sx={{
                bgcolor: "primary.main",
                width: "40px",
                height: "23px",
                marginTop: "1px",
                marginLeft: "-8px",
                boxShadow: "7",
                textTransform: "lowercase", // Garante que o texto fique em caixa baixa
                color: "text.primary",
                WebkitAppRegion: "no-drag",
                "&:hover": {
                  transition: "0.6s",
                  bgcolor: "primary.dark",
                },
                "&:active": {
                  boxShadow: "4",
                  transition: "0.8s",
                },
              }}
            >
              <SearchIcon />
            </Fab>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
