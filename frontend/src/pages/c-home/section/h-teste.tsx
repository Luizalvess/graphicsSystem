import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { IoIosSend } from "react-icons/io";

export const I_Teste: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "8.55%",
        justifyContent: "space-center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px 40px",
        bgcolor: "primary.main",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant={"h2"}
        sx={{
          textAlign: "center",
          color: "text.secondary",
        }}
      >
        simple steps for
      </Typography>

      <Typography
        variant={"h5"}
        sx={{
          textAlign: "center",
          padding: "15px 0",
          color: "primary.light",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tempora
        <br />
        earum maxime voluptate, accusantium dolore tempore inventore veritatis
        exercitationem ullam dicta.
      </Typography>
      <Container
        sx={{
          height: "70%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Stack width={"190px"} height={"100%"}>
          <Typography
            variant={"h5"}
            sx={{
              padding: "15px 15px",
              color: "text.secondary",
            }}
          >
            coloubas de textos{" "}
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 15px",
              color: "text.primary",
              textAlign: "justify",
              textIndent: "25px",
              letterSpacing: "1px",
              lineHeight: "1.5",
              paddingBottom: "20px",
            }}
          >
            lorem ipsum dolor sit dgdg hshs hs shiii iiaslj amet consectetur
            adipisicing elit. Lorems ipsum cassa dolor sit amet,11sfdf sdss sshs
            conse hju uuuuskksjdk sjs hshshys adipisicing elit. Eaque nulla quo
            molestiae ddhh sdssds repellatiy dolorum sab provident autem
            officiis quasdss omnis animi, iusto dweassss facilis repudiandae
            nesciunt, incidunt exercitationem
          </Typography>
        </Stack>
        <Stack width={"190px"} height={"100%"}>
          <Typography
            variant={"h5"}
            sx={{
              padding: "15px 15px",
              color: "text.secondary",
            }}
          >
            coloubas de textos{" "}
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 15px",
              color: "text.primary",
              textAlign: "justify",
              textIndent: "25px",
              letterSpacing: "1px",
              lineHeight: "1.5",
              paddingBottom: "20px",
            }}
          >
            lorem ipsum dolor sit dgdg hshs hs shiii iiaslj amet consectetur
            adipisicing elit. Lorems ipsum cassa dolor sit amet,11sfdf sdss sshs
            conse hju uuuuskksjdk sjs hshshys adipisicing elit. Eaque nulla quo
            molestiae ddhh sdssds repellatiy dolorum sab provident autem
            officiis quasdss omnis animi, iusto dweassss facilis repudiandae
            nesciunt, incidunt exercitationem
          </Typography>
        </Stack>
        <Stack width={"190px"} height={"100%"}>
          <Typography
            variant={"h5"}
            sx={{
              padding: "15px 15px",
              color: "text.secondary",
            }}
          >
            coloubas de textos{" "}
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 15px",
              color: "text.primary",
              textAlign: "justify",
              textIndent: "25px",
              letterSpacing: "1px",
              lineHeight: "1.5",
              paddingBottom: "20px",
            }}
          >
            lorem ipsum dolor sit dgdg hshs hs shiii iiaslj amet consectetur
            adipisicing elit. Lorems ipsum cassa dolor sit amet,11sfdf sdss sshs
            conse hju uuuuskksjdk sjs hshshys adipisicing elit. Eaque nulla quo
            molestiae ddhh sdssds repellatiy dolorum sab provident autem
            officiis quasdss omnis animi, iusto dweassss facilis repudiandae
            nesciunt, incidunt exercitationem
          </Typography>
        </Stack>
        <Stack width={"190px"} height={"100%"}>
          <Typography
            variant={"h5"}
            sx={{
              padding: "15px 15px",
              color: "text.secondary",
            }}
          >
            coloubas de textos{" "}
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 15px",
              color: "text.primary",
              textAlign: "justify",
              textIndent: "25px",
              letterSpacing: "1px",
              lineHeight: "1.5",
              paddingBottom: "20px",
            }}
          >
            lorem ipsum dolor sit dgdg hshs hs shiii iiaslj amet consectetur
            adipisicing elit. Lorems ipsum cassa dolor sit amet,11sfdf sdss sshs
            conse hju uuuuskksjdk sjs hshshys adipisicing elit. Eaque nulla quo
            molestiae ddhh sdssds repellatiy dolorum sab provident autem
            officiis quasdss omnis animi, iusto dweassss facilis repudiandae
            nesciunt, incidunt exercitationem
          </Typography>
        </Stack>
        <Stack width={"190px"} height={"100%"}>
          <Typography
            variant={"h5"}
            sx={{
              padding: "15px 15px",
              color: "text.secondary",
            }}
          >
            coloubas de textos{" "}
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              padding: "0 15px",
              color: "text.primary",
              textAlign: "justify",
              textIndent: "25px",
              letterSpacing: "1px",
              lineHeight: "1.5",
              paddingBottom: "20px",
            }}
          >
            lorem ipsum dolor sit dgdg hshs hs shiii iiaslj amet consectetur
            adipisicing elit. Lorems ipsum cassa dolor sit amet,11sfdf sdss sshs
            conse hju uuuuskksjdk sjs hshshys adipisicing elit. Eaque nulla quo
            molestiae ddhh sdssds repellatiy dolorum sab provident autem
            officiis quasdss omnis animi, iusto dweassss facilis repudiandae
            nesciunt, incidunt exercitationem
          </Typography>
        </Stack>
      </Container>
      <Button
        variant="outlined"
        startIcon={<IoIosSend />}
        sx={(theme) => ({
          color: "primary.light",
          border: `2px solid ${theme.palette.primary.light}`,
          boxShadow: "8",
        })}
      >
        Enviar
      </Button>
    </Box>
  );
};
