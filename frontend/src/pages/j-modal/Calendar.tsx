import { Box } from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { ModalContainer } from "../../Components";

export const Calendar = () => {
  return (
    <ModalContainer
      modalType="calendar"
      width="700px"
      height="600px"
      minimizedIcon={<FaCalendarAlt />}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
      ></Box>
    </ModalContainer>
  );
};
