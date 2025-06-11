import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BsArrowRightCircleFill } from "react-icons/bs";

export const GRID: React.FC = () => {
  return (
    <Box
      padding={"5px"}
      borderRadius={"10px"}
      width={"100%"}
      height={"5.2%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"primary.light"}
      sx={(theme) => ({
        border: `2px solid ${theme.palette.primary.main}`,
      })}
    >
      <Stack
        sx={{ width: "100%", height: "100%" }}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          width={"49.7%"}
          height={"100%"}
          borderRadius={"10px"}
          padding={"15px"}
          color={"primary.main"}
          display={"flex"}
          justifyContent={"left"}
          position={"relative"}
        >
          <Typography
            variant={"h5"}
            sx={{
              paddingBottom: "30px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            Print
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              textTransform: "uppercase",
              width: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              letterSpacing: "1px",
              wordSpacing: "5px",
              border: "2px solid green",
              color: "text.secondary",
            }}
          >
            welcome
          </Typography>
          <Typography
            variant={"h2"}
            sx={{
              padding: "25px 0",
              textTransform: "uppercase",
              letterSpacing: "5px",
              wordSpacing: "10px",
              lineHeight: "45px",
            }}
          >
            magic print <br />
            smart home
            <br />
            control
          </Typography>
          <Typography
            variant={"h6"}
            sx={{
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Ut
            vero hic aut ad quidem, inventore quisquam ipsam libero autem rem
            accusamus corrupti, ea perspiciatis delectus
          </Typography>
        </Stack>
        <Stack
          width={"49.7%"}
          height={"100%"}
          borderRadius={"10px"}
          position={"relative"}
          color={"#fff"}
          bgcolor={"secondary.contrastText"}
          padding={"20px"}
        >
          <Typography
            variant={"h5"}
            sx={{
              textTransform: "uppercase",
              width: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              letterSpacing: "1px",
              wordSpacing: "5px",
              border: "2px solid #fff",
              color: "#fff",
            }}
          >
            welcome
          </Typography>
          <Typography
            variant={"h4"}
            sx={{
              padding: "25px 0",
              textTransform: "uppercase",
              letterSpacing: "5px",
              wordSpacing: "5px",
              lineHeight: "30px",
            }}
          >
            modern interior with <br />
            elastic materials
          </Typography>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            borderBottom={"1px solid #fff"}
            margin={"15px"}
            textTransform={"uppercase"}
          >
            {"material"}{" "}
            <Typography
              sx={{
                textTransform: "uppercase",
              }}
            >
              x-elastic system
            </Typography>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            borderBottom={"1px solid #fff"}
            margin={"20px 15px"}
            position={"relative"}
          >
            <Typography
              sx={{
                textAlign: "center",
                position: "absolute",
                textTransform: "uppercase",
                bottom: "0",
                right: "0%",
              }}
            >
              x-elastic system
            </Typography>
            <Typography
              sx={{
                textAlign: "end",
                position: "absolute",
                textTransform: "uppercase",
                bottom: "0",
                right: "50%",
              }}
            >
              series production
            </Typography>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"left"}
            margin={"15px"}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
              }}
            >
              created sy thomsoon
            </Typography>
          </Stack>
          <Typography
            variant={"h4"}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            about spacification
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "#fff",
            }}
          >
            <BsArrowRightCircleFill fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={"150px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"5px"}
      >
        <Stack
          width={"24.5%"}
          height={"100%"}
          borderRadius={"15px"}
          bgcolor={"text.secondary"}
          position={"relative"}
          color={"primary.light"}
        >
          <Typography
            variant={"h4"}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            get start
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "primary.light",
            }}
          >
            <BsArrowRightCircleFill fontSize="large" />
          </IconButton>
        </Stack>
        <Stack
          width={"24.5%"}
          height={"100%"}
          border={"2px solid gray"}
          borderRadius={"15px"}
          position={"relative"}
          color={"primary.main"}
        >
          <Typography
            variant={"h4"}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            pricing list
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "primary.main",
            }}
          >
            <BsArrowRightCircleFill fontSize="large" />
          </IconButton>
        </Stack>
        <Stack
          width={"24.5%"}
          height={"100%"}
          borderRadius={"15px"}
          position={"relative"}
          color={"primary.light"}
          bgcolor={"primary.main"}
        >
          <Typography
            variant={"h4"}
            sx={{
              position: "absolute",
              top: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            photo more
            <br /> develop
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
            }}
          >
            check all
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "primary.light",
            }}
          >
            <BsArrowRightCircleFill fontSize="large" />
          </IconButton>
        </Stack>
        <Stack
          width={"24.5%"}
          height={"100%"}
          borderRadius={"15px"}
          position={"relative"}
          overflow={"hidden"}
        >
          <Typography
            variant={"h4"}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "5px",
              color: "white",
            }}
          >
            ecoSystem
          </Typography>
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "primary.main",
            }}
          >
            <BsArrowRightCircleFill fontSize="large" />
          </IconButton>
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src="grid_02.jpg"
            sx={{
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
