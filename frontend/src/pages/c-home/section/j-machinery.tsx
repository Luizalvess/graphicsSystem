import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const Machinery: React.FC = () => {
  return (
    <Box
      width={"100%"}
      height={"22.7%"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"20px"}
      padding={"15px 0 "}
      bgcolor={"primary.main"}
      color={"text.primary"}
    >
      <Paper
        sx={{
          width: "97%",
          height: "400px",
          margin: "0 auto",
          bgcolor: "primary.contrastText",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "1",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          component={"img"}
          src="img_HTeste_01.jpeg"
          sx={{
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        />
      </Paper>
      <Typography
        variant={"h6"}
        sx={{
          padding: "15px 28px",
          textAlign: "justify",
          "::first-letter": {
            height: "5.8rem",
            fontWeight: "bold",
            fontSize: "6rem",
            lineHeight: "5.8rem",
            float: "left",
            paddingRight: "5px",
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        tenetur! Similique necessitatibus error nisi itaque, temporibus
        asperiores deleniti sequi ut, et facilis deserunt dicta voluptas minima
        quos quis, aut exercitationem. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Hic adipisci corrupti aliquam quam dolor assumenda
        accusantium similique? Repellendus, voluptas? Eaque itaque ipsum
        maiores. Debitis totam deleniti deserunt enim velit incidunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
        Similique necessitatibus error nisi itaque, temporibus asperiores
        deleniti sequi ut, et facilis deserunt dicta voluptas minima quos quis,
        aut exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic adipisci corrupti aliquam quam dolor assumenda accusantium
        similique? Repellendus, voluptas? Eaque itaque ipsum maiores. Debitis
        totam deleniti deserunt enim velit incidunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, tenetur! Similique
        necessitatibus error nisi itaque, temporibus asperiores deleniti sequi
        ut, et facilis deserunt dicta voluptas minima quos quis, aut
        exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic adipisci corrupti aliquam quam dolor assumenda accusantium
        similique? Repellendus, voluptas? Eaque itaque ipsum maiores. Debitis
        totam deleniti deserunt enim velit incidunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, tenetur! Similique
        necessitatibus error nisi itaque, temporibus asperiores deleniti sequi
        ut, et facilis deserunt dicta voluptas minima quos quis, aut
        exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic adipisci corrupti aliquam quam dolor assumenda accusantium
        similique? Repellendus, voluptas? Eaque itaque ipsum maiores. Debitis
        totam deleniti deserunt enim velit incidunt!
      </Typography>
      <Paper
        sx={{
          width: "60%",
          alignSelf: "left",
          height: "250px",
          marginLeft: "28px",
          overflow: "hidden",
          borderRadius: "2",
          boxShadow: "1",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          component={"img"}
          src="img_HTeste_02.jpeg"
          sx={{
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        />
      </Paper>
      <Typography
        variant={"h6"}
        sx={{
          padding: "15px 200px",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        tenetur! Similique necessitatibus error nisi itaque, temporibus
        asperiores deleniti sequi ut, et facilis deserunt dicta voluptas minima
        quos quis, aut exercitationem. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Hic adipisci corrupti aliquam quam dolor assumenda
        accusantium similique? Repellendus, voluptas? Eaque itaque ipsum
        maiores. Debitis totam deleniti deserunt enim velit incidunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
        Similique necessitatibus error nisi itaque, temporibus asperiores
        deleniti sequi ut, et facilis deserunt dicta voluptas minima quos quis,
        aut exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic adipisci corrupti aliquam quam dolor assumenda accusantium
        similique? Repellendus, voluptas?
      </Typography>
      <Stack
        sx={{
          width: "80%",
          alignSelf: "left",
          height: "250px",
          marginLeft: "28px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Paper
          sx={{
            width: "40%",
            alignSelf: "left",
            height: "250px",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "1",
          }}
        >
          <Box
            width={"100%"}
            height={"100%"}
            component={"img"}
            src="img_HTeste_03.jpg"
            sx={{
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          />
        </Paper>
        <Typography
          variant={"h6"}
          sx={{
            width: "60%",

            padding: "0 15px",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          tenetur! Similique necessitatibus error nisi itaque, temporibus
          asperiores deleniti sequi ut, et facilis deserunt dicta voluptas Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
          Similique necessitatibus error nisi itaque, temporibus asperiores
          deleniti sequi ut, et facilis deserunt dicta voluptas Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
          Similique necessitatibus error nisi itaque, temporibus asperiores
          deleniti sequi ut, et facilis deserunt dicta voluptas Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
          Similique necessitatibus error nisi itaque, temporibus asperiores
          deleniti sequi ut, et facilis deserunt dicta voluptas Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sapiente, tenetur!
          Similique necessitatibus error nisi itaque, temporibus asperiores
          deleniti sequi ut, et facilis deserunt dicta voluptas Lorem ipsum et
        </Typography>
      </Stack>
      <Typography
        variant={"h6"}
        sx={{
          padding: "15px 200px",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        tenetur!{" "}
        <ins>
          Similique necessitatibus error nisi itaque, temporibus asperiores
          deleniti sequi ut
        </ins>
        , et facilis deserunt dicta voluptas minima quos quis, aut
        exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic adipisci corrupti aliquam quam dolor assumenda accusantium
        similique? <code>Repellendus, voluptas?</code>aque itaque ipsum maiores.
        Debitis totam deleniti deserunt enim velit incidunt!{" "}
        <bdo dir="ltr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </bdo>
        . Sapiente, tenetur! Similique necessitatibus <em>error nisi itaque</em>
        , temporibus asperiores deleniti sequi ut, et facilis{" "}
        <del>deserunt</del> dicta voluptas minima quos quis,{" "}
        <q>aut exercitationem</q>. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Hic adipisci corrupti aliquam quam dolor
        <strong> assumenda accusantium</strong>
        similique? Repellendus, <ins>voluptas?</ins> x<sup>20</sup> h
        <sub>2</sub>O <u>Eaque</u> <abbr title="cascading style">css</abbr>{" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        pariatur repudiandae nisi doloremque quidem inventore deleniti ad non,
        eum blanditiis odio veniam sapiente voluptatem optio dicta. Porro
        repellat facere sunt.
        {/* <ol type="i">
          <li>lista ordenada</li>
        </ol> */}
        {/* em = italico, strong = negrito, del = riscado, ins = sublinhado, sup = sobrescrito, sub = subscrito, u = underline, blockqoute= destaca uma frase e permite por o link do autor, abbr= serve com tooltype para textos, bdo= escreve da direita pra esquerda, <ol><li>terefa da lista<li/><ol/>= isso e uma lista numerica ou alfabética, <ul><li>terefa da lista<li/><ul/>= isso e uma lista não ordenadas  */}
        {/* para envelopar digite abb */}
      </Typography>
    </Box>
  );
};
