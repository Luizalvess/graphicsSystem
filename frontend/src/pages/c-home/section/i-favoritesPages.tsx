import { Box, Pagination, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const FavoritesPages: React.FC = () => {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"row"}>
      <Stack
        width={"15%"}
        height={"400px"}
        color={"secondary.main"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"8.7rem"}
      >
        <IoIosArrowBack />
      </Stack>
      <Stack
        width={"70%"}
        height={"400px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography
          variant={"h2"}
          sx={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
            wordSpacing: "5px",
            color: "secondary.contrastText",
          }}
        >
          Clientes
        </Typography>

        <Stack
          width={"100%"}
          height={"70%"}
          bgcolor={"secondary.light"}
          borderRadius={"10px"}
          display={"flex"}
          flexDirection={"row"}
          margin={"15px 0"}
          boxShadow={"2"}
        >
          <Stack
            width={"30%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography
              variant={"h4"}
              sx={{
                color: "text.secondary",
                textAlign: "left",
                padding: "10px 15px",
                fontWeight: "bold",
                textTransform: "uppercase",
                textDecoration: "underline",
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "5px",
              }}
            >
              lorspsun
              <br />
              dolor
              <br />
              talmus sigor
            </Typography>
            <Typography
              variant={"h6"}
              sx={{
                color: "secondary.contrastText",
                textAlign: "justify",
                padding: "10px 15px",
              }}
            >
              Lorem ipsum dolorr sitff ameddst consectetur, adipisiciseng
              selasit. Quiass necessitatibus resddfrum eligendi quam optio et
              illo atque. Voluptatem hardfdum vensdiam, nostrum dolorem maxime
              ipsasim molestiasd quaerastd gdetdssgd.
            </Typography>
          </Stack>
          <Stack width={"70%"} height={"100%"}>
            <Stack
              width={"100%"}
              height={"50%"}
              padding={"20px 15px"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
            </Stack>
            <Stack
              width={"100%"}
              height={"50%"}
              padding={"20px 15px"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              />
              <Paper
                sx={{
                  boxShadow: "8",
                  height: "100%",
                  width: "20%",
                  margin: "0 15px",
                }}
              ></Paper>
            </Stack>
          </Stack>
        </Stack>
        <Pagination
          count={8}
          hidePrevButton
          hideNextButton
          color={"secondary"}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "primary.main",
            },
            "& .Mui-selected": {
              backgroundColor: "primary.main",
              color: "secondary.main",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "primary.main",
              color: "secondary.main",
            },
            "& .MuiPaginationItem-root:focus": {
              backgroundColor: "primary.main",
              color: "secondary.main",
            },
            marginLeft: "50%",
            transform: "translateX(-35%)",
          }}
        />
      </Stack>
      <Stack
        width={"15%"}
        height={"400px"}
        color={"secondary.main"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"8.7rem"}
      >
        <IoIosArrowForward />
      </Stack>
    </Box>
  );
};
