import { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useModals } from "@/shared";

export const MaxModalsWarning: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { getOpenModalsCount } = useModals();
  const MAX_OPEN_MODALS = 5;

  useEffect(() => {
    // Mostrar aviso quando atingir o limite de modais
    if (getOpenModalsCount() >= MAX_OPEN_MODALS) {
      setOpen(true);
    }
  }, [getOpenModalsCount]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        Limite máximo de {MAX_OPEN_MODALS} modais abertos atingido.
      </Alert>
    </Snackbar>
  );
};
