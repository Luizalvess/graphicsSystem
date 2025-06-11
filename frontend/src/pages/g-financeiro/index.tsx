import React from "react";
import { LayoutBase } from "../../shared";
import { Box, Container } from "@mui/material";
import { ButtonsBig } from "../../Components";
import {
  FaCoins,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import { HiPrinter } from "react-icons/hi2";
import { PiCalendarFill } from "react-icons/pi";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

export const Financeiro: React.FC = () => {
  return (
    <LayoutBase>
      <Box
        width={"100%"}
        height={"100%"}
        padding={"35px 0"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Container
          sx={{
            borderRadius: "15px",
            width: "100%",
            height: "100%",
            maxHeight: "650px",
            boxShadow: "1",
            padding: "15px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            marginTop={"10px"}
            width={"60%"}
            height={"100%"}
            display={"grid"}
            alignItems={"center"}
            justifyContent={"center"}
            gridTemplateColumns={"repeat(2, 1fr)"}
            gridTemplateRows={"repeat(5, 1fr)"}
          >
            <ButtonsBig
              label="MOVIMENTO DE CAIXA"
              icon={FaMoneyBillTrendUp}
              to=""
            />
            <ButtonsBig label="CONTAS A RECEBER" icon={GiReceiveMoney} to="" />

            <ButtonsBig label="CONTAS A PAGAR" icon={GiPayMoney} to="" />
            <ButtonsBig
              label="TRANSFERÊNCIA ENTRE CAIXAS"
              icon={FaMoneyBillTransfer}
              to=""
            />

            <ButtonsBig label="RESULTADO GERAL" icon={HiPrinter} to="" />
            <ButtonsBig label="MOVIMENTO DE CAIXA" icon={HiPrinter} to="" />

            <ButtonsBig label="CENTRO DE CUSTOS" icon={HiPrinter} to="" />
            <ButtonsBig label="PLANO DE CONTAS" icon={HiPrinter} to="" />

            <ButtonsBig label="PLANO DE CONTAS " icon={PiCalendarFill} to="" />
          </Box>
          <Box
            width={"40%"}
            height={"100%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25rem",
              color: "primary.light",
            }}
          >
            <FaCoins />
          </Box>
        </Container>
      </Box>
    </LayoutBase>
  );
};
