import { Box, Card } from "@mui/material";

export const MapPage = () => {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2492861618107!2d-43.2767786!3d-22.904174349999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dbbd53c320b%3A0x5831adebad6984dd!2sRua%20Maria%20Calmon%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020710-030!5e0!3m2!1spt-BR!2sbr!4v1741455129352!5m2!1spt-BR!2sbr"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          width: "100%",
          height: "100%",
          border: "none",
          filter: "grayscale(100) invert(100%)",
        }}
      />
    </Card>
  );
};
