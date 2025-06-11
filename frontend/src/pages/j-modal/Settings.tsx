import { Box } from "@mui/material";
import { FaCog } from "react-icons/fa";
import { ModalContainer } from "../../Components";

export const Settings = () => {
  return (
    <ModalContainer
      modalType="settings"
      width="700px"
      height="600px"
      minimizedIcon={<FaCog />}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Configurações do Sistema
      </Box>
    </ModalContainer>
  );
};
