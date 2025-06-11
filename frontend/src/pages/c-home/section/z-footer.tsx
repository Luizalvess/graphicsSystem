import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  IoCloudUploadOutline,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { TextBx } from "../component/Tools/textBx";
import { MapPage } from "../component/maps";
import { TextFooter } from "../component/Tools/textFooter";

export const Footer: React.FC = () => {
  return (
    <Box
      width={"98%"}
      display={"flex"}
      padding={"15px 0 15px 0"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        position: "absolute",
        bottom: "0",
        borderRadius: "20px",
        left: "15px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          bgcolor: "background.default",
          height: "550px",
          padding: "20px 0 0 0",
          position: "relative",
        }}
      >
        <Stack
          width={"100%"}
          height={"70%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          position={"relative"}
          overflow={"hidden"}
        >
          <MapPage />
          <Typography
            variant={"h2"}
            sx={{
              position: "absolute",
              bottom: "30px",
              left: "100px",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "primary.contrastText",
            }}
          >
            {"  Nossos Contatos"}
          </Typography>
        </Stack>
        <Stack
          sx={{
            height: "28%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack
            position={"relative"}
            margin={"20px 25px"}
            width={"150px"}
            paddingTop={"30px"}
            color={"primary.main"}
          >
            <Typography
              variant={"h5"}
              sx={{
                position: "absolute",
                color: "text.secondary",
                letterSpacing: "1px",
                top: "0",
                left: "0",
              }}
            >
              Serviços
            </Typography>

            <TextFooter>{"impressão"}</TextFooter>
            <TextFooter>{"encadernação "}</TextFooter>
            <TextFooter>{"laminação"}</TextFooter>
            <TextFooter>{"diagramação"}</TextFooter>
          </Stack>

          <Stack
            position={"relative"}
            margin={"20px 25px"}
            width={"150px"}
            paddingTop={"30px"}
            color={"primary.main"}
          >
            <Typography
              variant={"h5"}
              sx={{
                position: "absolute",
                color: "text.secondary",
                letterSpacing: "1px",
                top: "0",
                left: "0",
              }}
            >
              Nosso Endereço
            </Typography>

            <TextFooter>{"Rua das flores, 500"}</TextFooter>
            <TextFooter>{"lojas A, B, C "}</TextFooter>
            <TextFooter>{"10º andar "}</TextFooter>
            <TextFooter>{"Loren spin"}</TextFooter>
          </Stack>

          <Stack
            position={"relative"}
            margin={"20px 25px"}
            width={"150px"}
            paddingTop={"30px"}
            color={"primary.main"}
          >
            <Typography
              variant={"h5"}
              sx={{
                position: "absolute",
                color: "text.secondary",
                letterSpacing: "1px",
                top: "0",
                left: "0",
              }}
            >
              Nosso Contato
            </Typography>
            <Typography variant={"h6"}>
              <TextFooter>{"+55 21 2245-1254"}</TextFooter>
              <TextFooter>{"+55 21 99656-8521"}</TextFooter>
              <TextFooter>{"nos@email.com"}</TextFooter>
            </Typography>
          </Stack>

          {/* redes sociais */}
          <Stack
            position={"absolute"}
            top={"90px"}
            right={"50px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            width={"31%"}
            fontSize={"1.7rem"}
            color={"primary.main"}
          >
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <FaFacebook />
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <FaGoogle />
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <FaSquareXTwitter />
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <IoLogoInstagram />
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <FaLinkedin />
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  marginTop: "-5px",
                },
              }}
            >
              <IoLogoWhatsapp />
            </Stack>

            <Typography
              variant={"h6"}
              sx={{
                fontWeight: "bold",
                marginLeft: "90px",
              }}
            >
              Nos Sigam
            </Typography>
          </Stack>
        </Stack>
        <Paper
          sx={{
            padding: "20px 30px",
            position: "absolute",
            color: "text.primary",
            bgcolor: "secondary.dark",
            borderRadius: "10px",
            boxShadow: 8,
            height: "85%",
            width: "30%",
            top: "-15px",
            right: "70px",
          }}
        >
          <Typography
            variant={"h5"}
            sx={{
              paddingBottom: "25px",
            }}
          >
            fale conosco
          </Typography>
          <TextBx label="Nome" variant="standard" />
          <TextBx label="E-mail" variant="standard" />
          <TextBx label="Telefone" variant="standard" />
          <TextBx label="celular" variant="standard" />

          <Button
            variant="outlined"
            startIcon={<IoCloudUploadOutline />}
            sx={{
              position: "absolute",
              left: "30px",
              bottom: "85px",
              color: "primary.light",
            }}
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: "0",
              bottom: "85px",
              bgcolor: "primary.light",
              borderRadius: "0",
              boxShadow: "none",
              height: "35px",
              color: "primary.main",
              wordSpacing: "4px",
              "&:hover": {
                color: "text.secondary",
                transition: "0.6s",
                boxShadow: "none",
              },
              "&:active": {
                transition: "0.6s",
                boxShadow: 5,
              },
            }}
          >
            enviar mensagem
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};
