import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { LuClipboardList } from "react-icons/lu";
import {
  FaMoneyBillAlt,
  FaRegCalendarAlt,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdAttachMoney, MdMoneyOff } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiCalculator } from "react-icons/gi";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonBlack, ButtonWhite } from "../../../Components";
import { useModal, useModals } from "../../../shared";
import { useEffect, useState } from "react";

// Componente principal que contém o Drawer
function App() {
  const [open, setOpen] = React.useState(false);

  // Função para alternar o estado do Drawer
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <SideBarMenu open={open} toggleDrawer={toggleDrawer} />
      <ControlButton toggleDrawer={toggleDrawer} />
    </Box>
  );
}

// Componente do Drawer personalizado
function SideBarMenu({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}) {
  const [left, setLeft] = useState("248px");

  useEffect(() => {
    const ajustarLeft = () => {
      setLeft(innerWidth >= 1600 ? "270px" : "248px");
    };

    addEventListener("resize", ajustarLeft);
    ajustarLeft(); // Executa no carregamento inicial

    return () => removeEventListener("resize", ajustarLeft);
  }, []);

  //Obter os controles para cada modal
  const calendarModal = useModal("calendar");
  const calculatorModal = useModal("calculator");
  const settingsModal = useModal("settings");
  const sellerModal = useModal("seller");

  //obter os controles para cada modal
  const { getOpenModalsCount } = useModals();
  const MAX_OPEN_MODALS = 5;

  // Verificar se pode abrir mais modais
  const canOpenMoreModals = getOpenModalsCount() < MAX_OPEN_MODALS;

  // Função para abrir modal com verificação de limite
  const handleOpenModal = (openHandler: () => void, isAlreadyOpen: boolean) => {
    //se o modal ja esta aberto ou minimizado, sempre permitir abrir
    if (isAlreadyOpen) {
      openHandler();
      return;
    }
    //caso contrario, verificar o limite
    if (canOpenMoreModals) {
      openHandler();
    } else {
      //opcional: mostra alguma indicação visual de que o limite foi atingido
      console.warn("limite de modais atingido ");
    }
  };

  return (
    <Drawer
      variant="temporary"
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      ModalProps={{
        keepMounted: true, // Mantém o componente montado quando não está visível
      }}
      PaperProps={{
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: "570px",
          width: "45px",
          borderRadius: 5,
          background: "none",
          left: left,
          top: "50%",
          translate: "50% -50%",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "5px",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          backgroundColor: "primary.main",
          borderRadius: "5px",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <ButtonWhite to="/recursosHumanos" icon={FaHandsHoldingChild} />

        {/* Calendar */}
        <ButtonWhite
          onClick={() =>
            handleOpenModal(
              calendarModal.handleOpen,
              calendarModal.isOpen || calendarModal.isMinimized
            )
          }
          icon={FaRegCalendarAlt}
          sx={{
            color:
              calendarModal.isOpen || calendarModal.isMinimized
                ? "text.secondary"
                : !canOpenMoreModals
                ? "text.disabled"
                : "text.primary",
            opacity:
              !canOpenMoreModals &&
              !calendarModal.isOpen &&
              !calendarModal.isMinimized
                ? 0.5
                : 1,
          }}
        />

        <ButtonWhite to="" icon={LuClipboardList} />

        {/* Vendedor */}
        <ButtonWhite
          onClick={() =>
            handleOpenModal(
              sellerModal.handleOpen,
              sellerModal.isOpen || sellerModal.isMinimized
            )
          }
          icon={FaUserTie}
          sx={{
            color:
              sellerModal.isOpen || sellerModal.isMinimized
                ? "text.secondary"
                : !canOpenMoreModals
                ? "text.disabled"
                : "text.primary",
            opacity:
              !canOpenMoreModals &&
              !sellerModal.isOpen &&
              !sellerModal.isMinimized
                ? 0.5
                : 1,
          }}
        />
        <ButtonWhite to="" icon={MdAttachMoney} />
        <ButtonWhite to="" icon={MdMoneyOff} />
        <ButtonWhite to="" icon={FaMoneyBillAlt} />
        <ButtonWhite to="" icon={MdMoneyOff} />
        <ButtonWhite to="" icon={IoCheckmarkDoneSharp} />

        {/* calculator */}
        <ButtonWhite
          onClick={() =>
            handleOpenModal(
              calculatorModal.handleOpen,
              calculatorModal.isOpen || calculatorModal.isMinimized
            )
          }
          icon={GiCalculator}
          sx={{
            color:
              calculatorModal.isOpen || calculatorModal.isMinimized
                ? "text.secondary"
                : !canOpenMoreModals
                ? "text.disabled"
                : "text.primary",
            opacity:
              !canOpenMoreModals &&
              !calculatorModal.isOpen &&
              !calculatorModal.isMinimized
                ? 0.5
                : 1,
          }}
        />

        {/* stings */}
        <ButtonWhite
          onClick={() =>
            handleOpenModal(
              settingsModal.handleOpen,
              settingsModal.isOpen || settingsModal.isMinimized
            )
          }
          icon={FaUsersCog}
          sx={{
            color:
              settingsModal.isOpen || settingsModal.isMinimized
                ? "text.secondary"
                : !canOpenMoreModals
                ? "text.disabled"
                : "text.primary",
            opacity:
              !canOpenMoreModals &&
              !settingsModal.isOpen &&
              !settingsModal.isMinimized
                ? 0.5
                : 1,
          }}
        />
        <ButtonWhite to="" icon={SlEnvolopeLetter} />
      </Box>
    </Drawer>
  );
}

// Componente que contém o botão de controle
function ControlButton({
  toggleDrawer,
}: {
  toggleDrawer: (newOpen: boolean) => () => void;
}) {
  return (
    <ButtonBlack
      sx={{
        height: "30px",
        width: "30px",
        color: "primary.main",
        marginLeft: "-5px",
        marginRight: "-10px",
      }}
      icon={MenuIcon}
      onClick={toggleDrawer(true)}
    />
  );
}

export default App;
