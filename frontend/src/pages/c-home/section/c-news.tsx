import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BtnNews } from "../component/Tools/btnNews";
import { IoIosSend } from "react-icons/io";
import { YouTubeVideo } from "../component/youTubeVideo";

export const News: React.FC = () => {
  return (
    <Box
      width={"100%"}
      height={"6.14%"}
      padding={"15px"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      bgcolor={"primary.main"}
      borderRadius={"20px"}
    >
      <Stack
        position={"relative"}
        height={"100%"}
        width={"40%"}
        maxWidth={"400px"}
        marginRight={"15px"}
        paddingRight={"10px"}
      >
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            margin: "10px 0",
            fontWeight: "bold",
            marginBottom: "30px",
            color: "text.primary",
          }}
        >
          landing page <br /> template
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            margin: "10px 0",
            fontWeight: "bold",
            marginBottom: "5px",
            color: "text.secondary",
          }}
        >
          loreispsum title
        </Typography>
        <Typography
          variant="h6"
          sx={{
            margin: "10px 0",
            fontWeight: "bold",
            marginBottom: "15px",
            textAlign: "justify",
            color: "primary.contrastText",
            fontFamily: " futura, sans-serif",
            lineHeight: "25px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          incidunt fugit quisquam reiciendis in quasi deleniti, at doloribus
          dolores. Odit, error officia minus unde ratione doloribus autem et
          consequatur nostrum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Neque sunt at cupiditate. Aperiam in odit, tempora
        </Typography>
        <BtnNews
          sx={{
            position: "absolute",
            left: "0",
            bottom: "2px",
          }}
          to=""
          icon={IoIosSend}
          label="enviar"
        />
      </Stack>
      <Stack
        height={"auto"}
        overflow={"hidden"}
        width={"70%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <YouTubeVideo />
      </Stack>
    </Box>
  );
};
