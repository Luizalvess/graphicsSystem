import { Photo } from "../component/photo";
import { Box, Container } from "@mui/material";
import React, { useRef } from "react";

export const ChatFavorite: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // multiplicador de velocidade
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box
      width={"100%"}
      height={"3.14%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"primary.main"}
      borderRadius={"20px"}
      overflow={"hidden"}
    >
      <Container
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          flexDirection: "row",
          cursor: "grab",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
            borderRadius: "4px",
          },
        }}
      >
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </Container>
    </Box>
  );
};
