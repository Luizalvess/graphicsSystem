import { CardButtonsWhite } from "../component/Tools/cardButtonsWhite";
import { BtnNews } from "../component/Tools/btnNews";
import { Box, Stack, Typography, Paper } from "@mui/material";
import React from "react";
import { IoIosSend } from "react-icons/io";

export const Cards: React.FC = () => {
  return (
    <Box
      width={"100%"}
      height={"6.9%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bgcolor={"primary.main"}
      borderRadius={"20px"}
      padding={"25px 0"}
    >
      <Typography
        variant={"h3"}
        sx={{
          color: "primary.light",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {" "}
        3 cards title
      </Typography>
      <Stack
        height={"100%"}
        width={"800px"}
        padding={"15px"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Paper
          sx={{
            height: "100%",
            width: "32%",
            bgcolor: "primary.main",
            flexDirection: "column",
            position: "relative",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              padding: "25px 15px",
              color: "text.secondary",
              textTransform: "uppercase",
            }}
          >
            primeiro card
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "25px 15px",
              color: "secondary.light",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "25px 15px",
              color: "secondary.light",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "80px",
            }}
          >
            cards
          </Typography>
          <CardButtonsWhite icon={IoIosSend} label="enviar" />
        </Paper>
        <Paper
          sx={{
            height: "100%",
            width: "32%",
            flexDirection: "column",
            position: "relative",
            bgcolor: "primary.main",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              padding: "25px 15px",
              color: "text.secondary",
              textTransform: "uppercase",
            }}
          >
            primeiro card
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "25px 15px",
              color: "secondary.light",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "25px 15px",
              color: "secondary.light",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "80px",
            }}
          >
            cards
          </Typography>
          <CardButtonsWhite icon={IoIosSend} label="enviar" />
        </Paper>
        <Paper
          sx={{
            height: "100%",
            width: "32%",
            bgcolor: "primary.light",
            position: "relative",
            borderRadius: "15px",
            boxShadow: "1",
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              padding: "25px 15px",
              color: "text.secondary",
              textTransform: "uppercase",
            }}
          >
            primeiro card
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "25px 20px",
              color: "primary.contrastText",
              textAlign: "justify",
              textIndent: "20px",
            }}
          >
            Lorem ipsumis dolordd sit amet consecteturi adipisicing aselit.
            Lorem ipsum dolor sit ametse, consectetur adipisicing elitas. fSunt
            repellendus quassieo voluptatibus vesniam odio nemo impedit. Nzihil
            soptio, usdllam corporis addlias expedita tempora,
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 10px",
              color: "primary.contrastText",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            cards
          </Typography>
          <BtnNews
            sx={{
              position: "absolute",
              left: "50%",
              bottom: "15px",
              right: "50%",
              transform: "translateX(-50%)",
              boxShadow: "2",
            }}
            to=""
            icon={IoIosSend}
            label="enviar"
          />
        </Paper>
      </Stack>
    </Box>
  );
};
