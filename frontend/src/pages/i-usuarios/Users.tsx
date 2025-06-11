import { FaUserTie } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import { Box, Stack } from "@mui/material";
import { ButtonBlack } from "../../Components";
import { LayoutBase } from "../../shared";
import React, { useState } from "react";
import { AddUserForm, PerfilUser, UserList } from "..";

export const Users: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <AddUserForm />;
      case 2:
        return <UserList />;
      case 3:
        return <PerfilUser />;
      default:
        return <AddUserForm />;
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
              top: "auto",
              display: "flex",
              position: "fixed",
              alignItems: "center",
              width: "75px",
              borderRadius: "0 15px 15px 0",
              bgcolor: "primary.light",
              height: "160px",
              padding: "10px 0",
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
              {/* Perfil */}
              <ButtonBlack
                onClick={() => handlePageChange(1)}
                icon={ImUserPlus}
              />
              {/* Lista de usuários */}
              <ButtonBlack
                onClick={() => handlePageChange(2)}
                icon={PiUserListFill}
              />
              {/* Adicionar usuários */}
              <ButtonBlack
                onClick={() => handlePageChange(3)}
                icon={FaUserTie}
              />
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
        {/* <Box
          sx={{
            width: "100%",
            height: "5%",
            overflow: "hidden",
          }}
        ></Box> */}
      </Box>
    </LayoutBase>
  );
};
