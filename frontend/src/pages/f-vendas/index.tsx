// Estilo

//Icones
import { Box, Container } from "@mui/material";
import { LayoutBase } from "../../shared";
import { ButtonsBig } from "../../Components";
import { FaCartPlus, FaCheck, FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { HiPrinter } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";

export const Vendas = () => {
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
            <ButtonsBig label="NOVA VENDA" icon={FaPlus} to="/orcamento" />
            <ButtonsBig label="ALTERAR/ CONSULTAR" icon={FaEdit} to="" />

            <ButtonsBig label="CANCELAR VENDA" icon={MdCancel} to="" />
            <ButtonsBig label="FINALIZAR VENDA" icon={FaCheck} to="" />

            <ButtonsBig label="EMITIR VENDA " icon={HiPrinter} to="" />
            <ButtonsBig label="PESQUISA GERAL" icon={TbReportSearch} to="" />

            <ButtonsBig label="VENDAS PENDENTES" icon={TbReportSearch} to="" />
            <ButtonsBig
              label="VENDAS FINALIZADAS"
              icon={TbReportSearch}
              to=""
            />

            <ButtonsBig label="RELATORIO DE VENDAS" icon={SlBookOpen} to="" />
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
            <FaCartPlus />
          </Box>
        </Container>
      </Box>
    </LayoutBase>
  );
};
