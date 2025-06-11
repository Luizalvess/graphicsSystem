import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  shadows: [
    "none", //0
    "0.4rem 0.4rem 0.4rem #0d0d0d, -0.4rem -0.4rem 0.4rem #2e2c2c", //1 dark
    "0.2rem 0.2rem 0.2rem #c9c9c9, -0.4rem -0.2rem 0.4rem #fff", //2 light
    "1px 1px 3px #b9b9b9", //3 text light
    "0.4rem 0.4rem 1rem #0d0d0d inset,-0.4rem -0.4rem 1rem #444444 inset", //4  sombra interna escura
    "0.4rem 0.4rem 1rem #ccc inset,-0.4rem -0.4rem 1rem #fff inset", //5 sombra interna claro
    "0.3rem 0.0rem 0.0rem #ccc inset,0.0rem -0.0rem 0rem #fff inset", //6 sombra interna login claro
    "0.2rem 0.2rem 0.4rem #0d0d0d, -0.2rem -0.1rem 0.4rem #2e2c2c", //7 botao de Pesquisa
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "10px 10px 0 #e6e6e6", //9 botao de pesquisa
    "10px -10px 0 #e6e6e6", //10 botao de pesquisa
    "-10px -10px 0 #e6e6e6", //11 botao de pesquisa
    "0.4rem 0.4rem 0.4rem #0d0d0d, -0.4rem -0.4rem 0.4rem #2e2c2c", //12 dark
    "10px -10px 0 #e6e6e6", //13 botao de pesquisa
    "-10px -10px 0 #e6e6e6", //14 botao de pesquisa
    "0.4rem 0.4rem 1rem #19703e inset,-0.4rem -0.4rem 1rem #4bd786 inset", //15  sombra interna escura
    "0 -15px 15px rgba(255, 255, 255, 0.05),  inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
  ],
  palette: {
    primary: {
      main: "#1d1d1d",
      light: "#e6e6e6",
      dark: "#272727",
      contrastText: "#b3b3b3",
    },
    secondary: {
      main: "#27ae60",
      light: "#fff",
      dark: "#000",
      contrastText: "#777",
    },
    background: {
      default: "#e6e6e6",
      paper: "#ccc",
    },
    text: {
      primary: "#e6e6e6",
      secondary: "#27ae60",
      disabled: "#444",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: "Helvetica",
    fontWeightRegular: "600",
    htmlFontSize: 14,
  },
});
