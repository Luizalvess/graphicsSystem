import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  shadows: [
    "none", //0
    "0.4rem 0.4rem 1rem #ccc, -0.4rem -0.4rem 1rem #fff", //1 light
    "0.4rem 0.4rem 0.4rem #0d0d0d, -0.4rem -0.4rem 0.4rem #2e2c2c", //2 dark
    "1px 1px 3px #b9b9b9", //3 text light
    "0.4rem 0.4rem 1rem #ccc inset,-0.4rem -0.4rem 1rem #fff inset", //4 sombra interna claro
    "0.4rem 0.4rem 1rem #0d0d0d inset,-0.4rem -0.4rem 1rem #444444 inset", //5  sombra interna escura
    "0.3rem 0.0rem 0.0rem #ccc inset,0.0rem -0.0rem 0rem #fff inset", //6 sombra interna login claro
    "0.2rem 0.2rem 0.5rem #ccc, -0.1rem -0.1rem 0.4rem #fff", //7 botao de pesquisa
    "2px 2px 4px rgba(0, 0, 0, 0.3)", //8 textShadow
    "10px 10px 0 #1d1d1d", //9 botao de pesquisa
    "10px -10px 0 #1d1d1d", //10 botao de pesquisa
    "-10px -10px 0 #1d1d1d", //11 botao de pesquisa
    "0.4rem 0.4rem 0.4rem #0d0d0d, -0.4rem -0.4rem 0.4rem #2e2c2c", //12 dark
    "10px -10px 0 #1d1d1d", //13 botao de pesquisa
    "-10px -10px 0 #1d1d1d", //14 botao de pesquisa
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
      main: "#e6e6e6",
      light: "#1d1d1d",
      dark: "#f5f5f5",
      contrastText: "#777",
    },
    secondary: {
      main: "#27ae60",
      light: "#272727",
      dark: "#fff",
      contrastText: "#b3b3b3",
    },
    background: {
      default: "#1d1d1d",
      paper: "#777",
    },
    text: {
      primary: "#444",
      secondary: "#27ae60",
      disabled: "#777",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: "Helvetica",
    fontWeightRegular: "600",
    htmlFontSize: 14,
  },
});
