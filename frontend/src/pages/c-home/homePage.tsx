// Estilo
import {
  Slide,
  ChatFavorite,
  News,
  OffsetHistory,
  OffsetPrint,
  FavoritesPages,
  Cards,
  Footer,
  Machinery,
  I_Teste,
  GRID,
  PrintVideo,
} from "./section";
import { MainMenu } from "../../Components";
import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  zoomIn,
} from "./component/animationVariants";

interface HomeProps {
  onScroll: (scrollTop: number) => void;
  homeRef: React.RefObject<HTMLDivElement>;
}

// Componente de seção animada com variantes
const AnimatedSection = ({ children, id, variant = "fadeInUp" }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const getVariant = () => {
    switch (variant) {
      case "fadeInLeft":
        return fadeInLeft;
      case "fadeInRight":
        return fadeInRight;
      case "zoomIn":
        return zoomIn;
      default:
        return fadeInUp;
    }
  };

  return (
    <Element name={id}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={getVariant()}
        style={{ width: "77.5vw", overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </Element>
  );
};

export const Home: React.FC<HomeProps> = ({ onScroll, homeRef }) => {
  const handleScroll = () => {
    if (homeRef.current) {
      onScroll(homeRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const homeElement = homeRef.current;
    if (homeElement) {
      homeElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (homeElement) {
        homeElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [homeRef]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "left",
      }}
    >
      <MainMenu />
      {/* Container  */}
      <Box
        ref={homeRef}
        sx={{
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
          width: "82%",
          height: "100%",
          marginBottom: "-30px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "12px",
            bgcolor: "primary.light",
            border: " 6px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "none",
            width: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "none",
            borderRadius: "4px",
            height: "none",
            // borderRight: "2px solid ",
            // borderLeft: "2px solid ",
            borderColor: "primary.main",
            // cursor: "pointer",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "none",
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: "none",
          },
        }}
      >
        <Stack
          display={"flex"}
          height={"7020px"}
          maxHeight={"7020px"}
          width={"100%"}
          sx={{
            overflow: "hidden",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "top",
            padding: "5px",
            borderRadius: "30px",
            bgcolor: "primary.light",
            position: "relative",
            gap: "5px",
          }}
        >
          <Slide />
          <ChatFavorite />
          <News />

          <OffsetHistory />

          <AnimatedSection id="offset-history" variant="zoomIn">
            <GRID />
          </AnimatedSection>
          <OffsetPrint />

          <AnimatedSection id="offset-history" variant="zoomIn">
            <PrintVideo />
          </AnimatedSection>

          <Cards />

          <I_Teste />
          <AnimatedSection id="news" variant="fadeInRight">
            <FavoritesPages />
          </AnimatedSection>

          <Machinery />

          <AnimatedSection id="footer" variant="zoomIn">
            <Footer />
          </AnimatedSection>
        </Stack>
      </Box>
    </Box>
  );
};
