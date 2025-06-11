//Icones
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { MdArrowForwardIos, MdDeleteForever } from "react-icons/md";
import { ImPrinter } from "react-icons/im";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsImages, BsListColumnsReverse } from "react-icons/bs";
import { GiEnvelope } from "react-icons/gi";
import { LayoutBase } from "../../shared";
import { Box, Stack } from "@mui/material";
import { ButtonBlack } from "../../Components";
import { useState } from "react";
import { ClientList } from "./section/ClientList";
import { CadClient } from "./section/CadClient";

export const Cliente = () => {
  // paginas do cliente
  const [page, setPage] = useState<number>(1);

  // função responsavlel pela mudança de pagina
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <ClientList />;
      case 2:
        return <CadClient />;

      default:
        return <ClientList />;
    }
  };

  return (
    <LayoutBase>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderPage()}

          <Box
            sx={{
              marginLeft: "-60px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              width: "75px",
              borderRadius: "0 15px 15px 0",
              bgcolor: "primary.light",
              height: "370px",
              padding: "5px 0",
              transition: "2.5s",
              color: "text.secondary",
              fontSize: "15px",
              zIndex: "999",
              "&:hover": {
                marginLeft: "0",
                transition: "1.5s",
                color: "text.disabled",
              },
            }}
          >
            <Stack
              height={"100%"}
              sx={{
                // marginRight: "-10px",
                padding: "5px 10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ButtonBlack
                onClick={() => handlePageChange(1)}
                icon={BsListColumnsReverse}
              />
              <ButtonBlack
                onClick={() => handlePageChange(2)}
                icon={FaPlusCircle}
              />
              <ButtonBlack icon={FaEdit} />
              <ButtonBlack icon={MdDeleteForever} />
              <ButtonBlack icon={ImPrinter} />
              <ButtonBlack icon={HiClipboardDocumentList} />
              <ButtonBlack icon={BsImages} />
              <ButtonBlack icon={GiEnvelope} />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "right",
                height: "100%",
                width: "20px",
              }}
            >
              <MdArrowForwardIos />
            </Stack>
          </Box>
        </Box>
      </Box>
    </LayoutBase>
  );
};
