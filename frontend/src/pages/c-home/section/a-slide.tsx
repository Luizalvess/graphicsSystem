import {
  Box,
  Button,
  GlobalStyles,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonCarrocel } from "../component/Tools/ButtonCarrocel";
import { FaPager } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward, IoLogoYoutube } from "react-icons/io5";
import { ButtonCarrocelTop } from "../component/Tools/ButtonCarrocelTop";
import { AnalogClock } from "../component/AnalogClock";
import ABSTER from "../../../Fonts/ABSTER.otf";
import { RoundCalendar } from "../component/RoundCalendar";
import { GoVideo } from "react-icons/go";
import { LuLayoutPanelTop } from "react-icons/lu";
import { WeatherDisplay } from "../component/weatherDisplay";

const images = [
  "image01.jpg",
  "image02.png",
  "image03.jpg",
  "image04.jpg",
  "image05.jpg",
  "image06.jpg",
  "image07.jpg",
  "image08.jpg",
];

export const Slide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-play a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width={"100%"} height={"5.7%"}>
      {/* Fonts */}
      <GlobalStyles
        styles={{
          "@font-face": [
            {
              fontFamily: "ABSTER",
              src: `url(${ABSTER}) format('truetype')`,
              fontWeight: "normal",
              fontStyle: "normal",
            },
          ],
        }}
      />
      {/* local da imagem  */}
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "30px",
          bgcolor: "primary.light",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "none",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"primary.light"}
          position={"relative"}
        >
          <Box
            top={"0"}
            left={"0"}
            position={"absolute"}
            height={"100%"}
            width={"100%"}
            zIndex={99}
            sx={{
              background:
                "linear-gradient(109deg, rgba(10, 12, 16, 0.77) 20%, rgba(10, 12, 16, 0.45) 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                onLoad={() =>
                  console.log(`Image ${index + 1} loaded successfully`)
                }
                onError={() =>
                  console.log(`Error loading image ${index + 1}: ${img}`)
                }
              />
            </Box>
          ))}
          <Box
            sx={{
              height: "100%",
              width: "83%",
              borderRadius: "30px 0 30px 30px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            {/* temperatura*/}
            <Box
              top={"100px"}
              right={"105px"}
              position={"absolute"}
              padding={"3px"}
              borderRadius={"50%"}
              border={"3px solid green"}
            >
              <Stack
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.secondary ",
                  opacity: "0.7",
                }}
              >
                <WeatherDisplay />
              </Stack>
            </Box>

            {/* Horas */}
            <Box
              top={"95px"}
              right={"-105px"}
              position={"absolute"}
              padding={"3px"}
              borderRadius={"50%"}
              border={"3px solid green"}
            >
              <Stack
                sx={{
                  width: "200px",
                  bgcolor: "primary.main",
                  height: "200px",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: "0.7",
                  justifyContent: "center",
                  color: "text.secondary",
                  boxShadow: "16",
                }}
              >
                <AnalogClock />
              </Stack>
            </Box>

            {/* calendário */}

            <Box
              top={"215px"}
              right={"85px"}
              position={"absolute"}
              padding={"3px"}
              borderRadius={"50%"}
              border={"3px solid green"}
              sx={{
                opacity: "0.7",
              }}
            >
              <Stack
                sx={{
                  width: "150px",
                  bgcolor: "primary.main",
                  height: "150px",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.secondary ",
                  opacity: "0.7",
                  boxShadow: "16",
                }}
              >
                <RoundCalendar />
              </Stack>
            </Box>

            <Stack
              top={"100px"}
              left={"100px"}
              position={"absolute"}
              color={"#fff"}
            >
              <Typography
                variant={"h1"}
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "45px",
                  fontFamily: "ABSTER",
                }}
              >
                Print
              </Typography>
              <Typography
                sx={{
                  margin: "15px 0",
                  paddingLeft: "10px",
                  textAlign: "justify",
                  width: "340px",
                  borderLeft: "4px solid green",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quam. Nostrum at nihil molestias. Maiores, quibusdam
                optio. Corporis porro animi perspiciatis illo. Odio in natus
                autem mollitia, dolores eligendi consequatur!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "10px",
                  width: "150px",
                  height: "35px",
                  borderRadius: "15px",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                  color: "#fff",
                  bgcolor: "text.secondary",
                  "&:hover": {
                    boxShadow: "none",
                  },
                  "&:active": {
                    boxShadow: "15",
                  },
                }}
              >
                {" explore mais "}
              </Button>
            </Stack>

            {/* Botoes de marcação  */}
            <Stack position={"absolute"} bottom={"10px"} left={"100px"}>
              <Pagination
                hideNextButton
                hidePrevButton
                count={8}
                color={"secondary"}
                page={currentIndex + 1}
                onChange={(_, page) => setCurrentIndex(page - 1)}
                sx={{
                  zIndex: 999,
                  "& .MuiPaginationItem-root": {
                    color: "secondary.contrastText",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "secondary.main",
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "primary.main",
                    color: "secondary.main",
                  },
                }}
              />
            </Stack>

            {/* botoes superior */}
            <Stack
              sx={{
                width: "66%",
                maxWidth: "517px",
                height: "60px",
                bgcolor: "primary.light",
                position: "absolute",
                top: "0",
                right: "20%",
                zIndex: "100",
                borderRadius: "0 0 35px 35px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 5px 5px 5px",
              }}
            >
              <Stack
                borderRadius={"0 0 30px 30px"}
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                height={"100%"}
                justifyContent={"space-between"}
                overflow={"hidden"}
                zIndex={"9999"}
                gap={"5px"}
              >
                <ButtonCarrocel icon={IoLogoYoutube} />
                <ButtonCarrocel icon={LuLayoutPanelTop} />
                <ButtonCarrocel icon={GoVideo} />
                <ButtonCarrocel icon={FaPager} />
                <ButtonCarrocel icon={FaMapLocationDot} />
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "17%",
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              borderRadius: "0 30px 30px 0",
              position: "relative",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{
                borderRadius: "30px 0 30px 0",
                height: "60px",
                width: "100%",
                padding: "5px 0 0 5px",
                flexDirection: "row",
                bgcolor: "primary.light",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                position: "absolute",
                right: "0",
                zIndex: "999",
              }}
            >
              <Stack
                borderRadius={"30px 0 0 0"}
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                height={"100%"}
                justifyContent={"space-between"}
                overflow={"hidden"}
                gap={"5px"}
              >
                <ButtonCarrocel icon={IoArrowBack} onClick={prevSlide} />
                <ButtonCarrocel icon={IoArrowForward} onClick={nextSlide} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
