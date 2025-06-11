import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useModal } from "@/shared";

export const TestModals: React.FC = () => {
  const calendarModal = useModal("calendar");
  const sellerModal = useModal("seller");

  return (
    <Box p={3}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={calendarModal.handleOpen}>
          Abrir Calendário
        </Button>

        <Button variant="contained" onClick={sellerModal.handleOpen}>
          Abrir Vendedor
        </Button>
      </Stack>
    </Box>
  );
};
