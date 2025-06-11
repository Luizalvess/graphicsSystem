import { Box, TextField } from "@mui/material";
import { FaCalculator } from "react-icons/fa";
import { CalculatorButton, ModalContainer } from "../../Components";

export const Calculator = () => {
  return (
    <ModalContainer
      modalType="calculator"
      width="340px"
      height="540px"
      minimizedIcon={<FaCalculator />}
    >
      <Box
        component={"main"}
        display={"grid"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"10px 20px"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        gridTemplateRows={"repeat(6, 1fr)"}
      >
        <TextField
          sx={{
            bgcolor: "primary.contrastText",
            border: "none",
            outline: "none",
            color: "primary.light",
            textAlgn: "right",
            paddingTop: "50px",
            gridColumn: "1/5",
            gridRow: "1/3",
          }}
        ></TextField>
        <CalculatorButton sx={{ color: "text.secondary" }}>
          {"AC"}
        </CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>
          DEL
        </CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>%</CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>/</CalculatorButton>
        <CalculatorButton>7</CalculatorButton>
        <CalculatorButton>8</CalculatorButton>
        <CalculatorButton>9</CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>*</CalculatorButton>
        <CalculatorButton>4</CalculatorButton>
        <CalculatorButton>5</CalculatorButton>
        <CalculatorButton>6</CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>-</CalculatorButton>
        <CalculatorButton>1</CalculatorButton>
        <CalculatorButton>2</CalculatorButton>
        <CalculatorButton>3</CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>+</CalculatorButton>
        <CalculatorButton>00</CalculatorButton>
        <CalculatorButton>0</CalculatorButton>
        <CalculatorButton sx={{ color: "text.secondary" }}>.</CalculatorButton>
        <CalculatorButton
          sx={{
            bgcolor: "text.secondary",
            color: "#e6e6e6",
          }}
        >
          =
        </CalculatorButton>
      </Box>
    </ModalContainer>
  );
};
