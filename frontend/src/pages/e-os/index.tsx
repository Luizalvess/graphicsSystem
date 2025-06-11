import { Box, Container } from "@mui/material";
import { LayoutBase } from "../../shared";
import { ButtonsBig } from "../../Components";
import { FaClipboardList } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";
import { FaPlus, FaEdit, FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { HiPrinter } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";

export const OS = () => {
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
            gridTemplateRows={"5, 1fr"}
          >
            <ButtonsBig label="NOVA O.S" icon={FaPlus} to="/addos" />
            <ButtonsBig label="ALTERAR/ CONSULTAR" icon={FaEdit} to="" />

            <ButtonsBig label="CANCELAR O.S" icon={MdCancel} to="" />
            <ButtonsBig label="FINALIZAR O.S" icon={FaCheck} to="" />

            <ButtonsBig label="EMITIR O.S " icon={HiPrinter} to="" />
            <ButtonsBig label="PESQUISA GERAL" icon={TbReportSearch} to="" />

            <ButtonsBig label="O.S PENDENTE" icon={TbReportSearch} to="" />
            <ButtonsBig label="O.S FINALIZADA" icon={TbReportSearch} to="" />

            <ButtonsBig label="RELATORIO DE O.S" icon={SlBookOpen} to="" />
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
            <FaClipboardList />
          </Box>
        </Container>
      </Box>
    </LayoutBase>
  );
};
