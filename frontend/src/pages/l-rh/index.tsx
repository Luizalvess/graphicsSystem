import { ButtonsBig } from "../../Components";
import { LayoutBase } from "../../shared/";
import { Box, Container } from "@mui/material";
import React from "react";
import { BsBank2, BsCake2Fill } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { GiTeacher } from "react-icons/gi";
import {
  FaHandsHoldingChild,
  FaUserPlus,
  FaUserClock,
  FaPersonCirclePlus,
  FaBook,
} from "react-icons/fa6";

export const RH: React.FC = () => {
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
            gridTemplateColumns={"50% 50%"}
            gridTemplateRows={"5, 1fr"}
          >
            <ButtonsBig
              label="USUÁRIOS"
              icon={FaUserPlus}
              to="/usuarios/cadUser"
            />
            <ButtonsBig label="ESCALA DE SERVIÇO" icon={FaUserClock} to="" />

            <ButtonsBig label="CADASTRO DO BANCO" icon={BsBank2} to="" />
            <ButtonsBig
              label="FUNCIONÁRIOS"
              icon={FaPersonCirclePlus}
              to="/cadfuncionario"
            />

            <ButtonsBig label="DOCUMENTAÇÃO " icon={FaBook} to="" />
            <ButtonsBig label="REL. DE FUNCIONÁRIO" icon={SlBookOpen} to="" />

            <ButtonsBig label="REL. USUÁRIOS" icon={SlBookOpen} to="" />
            <ButtonsBig label="REL. ACESSO" icon={SlBookOpen} to="" />

            <ButtonsBig label="ANIVERSARIANTES" icon={BsCake2Fill} to="" />
            <ButtonsBig label="TREINAMENTOS" icon={GiTeacher} to="" />
          </Box>
          <Box
            width={"40%"}
            height={"100%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25rem",
              textShadow: "4",
              color: "primary.light",
            }}
          >
            <FaHandsHoldingChild />
          </Box>
        </Container>
      </Box>
    </LayoutBase>
  );
};
