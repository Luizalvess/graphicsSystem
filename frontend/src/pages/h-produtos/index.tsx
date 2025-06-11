import React, { useState } from "react";
import { LayoutBase } from "../../shared";

//Icones
import { MdArrowForwardIos } from "react-icons/md";
import { Box, Stack } from "@mui/material";
import { ButtonBlack } from "../../Components";
import { Estoque, Fornecedor } from "..";
import { FaBoxes } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";

export const Produtos: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Estoque />;
      case 2:
        return <Fornecedor />;

      default:
        return <Estoque />;
    }
  };

  return (
    <LayoutBase>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Corpo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              left: "-55px",
              top: "23%",
              display: "flex",
              position: "fixed",
              alignItems: "center",
              width: "75px",
              borderRadius: "0 15px 15px 0",
              bgcolor: "primary.light",
              height: "400px",
              padding: "5px 0",
              transition: "2.5s",
              color: "text.secondary",
              fontSize: "15px",
              zIndex: "999",
              "&:hover": {
                left: "7px",
                transition: "1.5s",
                color: "text.disabled",
              },
            }}
          >
            <Stack
              sx={{
                height: "100%",
                padding: "5px 10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Estoque */}
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
              {/* Fornecedor */}
              <ButtonBlack
                onClick={() => handlePageChange(2)}
                icon={FaTruckRampBox}
              />
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
              <ButtonBlack onClick={() => handlePageChange(1)} icon={FaBoxes} />
            </Stack>
            <MdArrowForwardIos
              style={{ marginLeft: "auto", padding: "0 8px" }}
            />
            <Stack
              sx={{
                marginLeft: "-20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                height: "100%",
                width: "20px",
              }}
            >
              <MdArrowForwardIos />
            </Stack>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            {renderPage()}
          </Box>
        </Box>

        {/* Rodapé */}
        <Box
          sx={{
            width: "100%",
            height: "5%",
            overflow: "hidden",
          }}
        ></Box>
      </Box>
    </LayoutBase>
  );
};
