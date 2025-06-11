// importação dos icones
import { PiPower } from "react-icons/pi";
import { Box, Stack } from "@mui/material";
import { Calculator, Chat, Home, Settings } from "@/pages";
import SidebarMenu from "./SideBarMenu/SidebarMenu";
import {
  ButtonWhite,
  MainWindowControls,
  ToggleButtons,
  SearchBox,
  MaxModalsWarning,
} from "@/Components";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // Configuração de scroll da pagina home
  const [isScrolled, setIsScrolled] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);

  const handleScrollHome = (scrollTop: number) => {
    setIsScrolled(scrollTop > 0); // Atualiza se a página Home rolou
  };

  const handlePageUp = () => {
    if (homeRef.current) {
      homeRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* // Base */}
      <Box
        sx={{
          padding: "10px",
          width: "100%",
          height: "100%",
          bgcolor: "background.default",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            borderRadius: "15px",
            bgcolor: "primary.main",
            alignItems: "center",
          }}
        >
          {/* <--BARRA DE TITULO--> */}
          <Box
            sx={{
              height: "5%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              webkitAppRegion: "drag",
              padding: "0 15px",
              WebkitAppRegion: "drag",
            }}
          >
            {/* Botoes: Home e Menu */}
            <Box
              sx={{
                width: "19.6%",
                maxWidth: "280px",
                height: " 100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: "-15px",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  marginTop: "20px",
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ButtonWhite
                  onClick={handlePageUp}
                  icon={FaArrowUp}
                  sx={{
                    color: isScrolled ? "text.secondary" : "primary.light",
                  }}
                />

                <MaxModalsWarning />
                <Chat />
                <Calculator />
                <Settings />
              </Stack>
            </Box>

            {/* Botoes, menu, minimizar, maximizar e fechar */}
            <Box
              sx={{
                marginTop: "-8px",
                bgcolor: "primary.light",
                width: "190px",
                height: "40px",
                maxHeight: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                borderRadius: "30px",
                position: "relative",
              }}
            >
              <Box
                top={"0"}
                left={"0"}
                height={"50px"}
                width={"40px"}
                bgcolor={"primary.light"}
                position={"absolute"}
                sx={{
                  transform: "translate3d(-50%, -50%, 0) rotate(-45deg)",
                }}
              />
              <Box
                top={"0"}
                right={"-40px"}
                height={"50px"}
                width={"40px"}
                bgcolor={"primary.light"}
                position={"absolute"}
                sx={{
                  transform: "translate3d(-50%, -50%, 0) rotate(45deg)",
                }}
              />

              <Stack
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  width: "98%",
                  height: "100%",
                  alignItems: "center",
                  webkitAppRegion: "no-drag",
                  flexDirection: "row",
                  zIndex: "999",
                }}
              >
                {/* Menu */}
                <SidebarMenu />
                <MainWindowControls />
              </Stack>
            </Box>

            {/* Barra de pesquisa */}
            <Box
              sx={{
                width: "18%",
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                paddingRight: "5px",
              }}
            >
              <Box
                sx={{
                  padding: "0 1px",
                  height: "32px",
                  width: "80%",
                  marginTop: "20px",
                  boxShadow: "4",
                  zIndex: "11",
                  borderRadius: "15px",
                }}
              >
                <SearchBox />
              </Box>
            </Box>
          </Box>
          {/* <-------------------------------------------------------> */}

          {/* <--CORPO--> */}
          <Box
            sx={{
              width: "100%",
              height: "91%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Home onScroll={handleScrollHome} homeRef={homeRef} />
          </Box>
          {/* <-------------------------------------------------------> */}

          {/* <--RODA-PE--> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "4%",
            }}
          >
            <Box
              sx={{
                width: "19.2%",
                maxWidth: "280px",
                padding: "0 0 0 0 ",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Stack
                sx={{
                  marginTop: "-25px",
                  width: "90%",
                  paddingRight: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* button logout */}
                <ButtonWhite onClick={handleLogout} icon={PiPower} />

                <Box
                  sx={{
                    marginRight: "-10px",
                    height: "30px",
                    width: "80ox",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "1",
                  }}
                >
                  <ToggleButtons />
                </Box>
              </Stack>
            </Box>
          </Box>
          {/* <-------------------------------------------------------> */}
        </Box>
      </Box>
    </>
  );
};
