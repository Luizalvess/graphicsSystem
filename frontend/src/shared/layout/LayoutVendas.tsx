import { FaArrowLeft } from "react-icons/fa";
import { ButtonWhite, Header } from "@/Components";
import { Box, Stack } from "@mui/material";
import { IoMdHome } from "react-icons/io";

export const LayoutVendas = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "8px",
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
          overflow: "hidden",
          border: "2px solid #000",
        }}
      >
        {/* Barra de titulos */}
        <Box
          sx={{
            height: "5%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            WebkitAppRegion: "drag",
            paddingTop: "10px",
          }}
        >
          {/* Botoes: Home e Menu */}
          <Box
            sx={{
              position: "absolute",
              top: "2.1%",
              left: "28px",
              width: "19.5%",
              height: " 5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "-15px",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                top: "-18px",
                left: "5px",
                marginTop: "20px",
                width: "80px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
              }}
            >
              <ButtonWhite to="/os" icon={FaArrowLeft} />
              <ButtonWhite to="/dashboard" icon={IoMdHome} />
            </Stack>
          </Box>

          <Header />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "95%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
