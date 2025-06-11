// src/components/AnalogClock.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minutesDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  const markers = Array.from({ length: 12 });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        margin: "0 auto",
      }}
    >
      {/* Números 12, 3, 6, 9 */}
      <Typography
        sx={{
          position: "absolute",
          top: "5px",
          left: "calc(50% - 15px)",
          fontSize: "25px",
        }}
      >
        12
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "calc(50% - 18px)",
          left: "5px",
          fontSize: "25px",
        }}
      >
        9
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "5px",
          left: "calc(50% - 6px)",
          fontSize: "25px",
        }}
      >
        6
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "calc(50% - 18px)",
          right: "5px",
          fontSize: "25px",
        }}
      >
        3
      </Typography>
      {/* Marcadores das horas */}
      {markers.map((_, index) => {
        const angle = index * 30 * (Math.PI / 180);
        const x = 100 + Math.sin(angle) * 80;
        const y = 100 - Math.cos(angle) * 80;

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: index % 3 === 0 ? 0 : 2,
              height: index % 3 === 0 ? 0 : 10,
              bgcolor: "primary.light",
              top: y,
              left: x,
              transform: `translate(-50%, -50%) rotate(${index * 30}deg)`,
              boxShadow: "8",
            }}
          />
        );
      })}

      {/* Ponteiro das horas */}
      <Box
        sx={{
          position: "absolute",
          width: 4,
          height: 50,
          backgroundColor: "primary.light",
          top: 50,
          left: "calc(50% - 2px)",
          transformOrigin: "bottom center",
          transform: `rotate(${hourDeg}deg)`,
          borderRadius: 4,
          boxShadow: "8",
        }}
      />

      {/* Ponteiro dos minutos */}
      <Box
        sx={{
          position: "absolute",
          width: 3,
          height: 75,
          backgroundColor: "primary.light",
          top: 25,
          left: "calc(50% - 1.5px)",
          transformOrigin: "bottom center",
          transform: `rotate(${minutesDeg}deg)`,
          borderRadius: 4,
          boxShadow: "8",
        }}
      />

      {/* Ponteiro dos segundos */}
      <Box
        sx={{
          position: "absolute",
          width: 2,
          height: 90,
          backgroundColor: "primary.light",
          top: 10,
          left: "calc(50% - 1px)",
          transformOrigin: "bottom center",
          transform: `rotate(${secondDeg}deg)`,
          boxShadow: "8",
        }}
      />

      {/* Centro do relógio */}
      <Box
        sx={{
          position: "absolute",
          width: 12,
          height: 12,
          backgroundColor: "primary.light",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50% )",
          zIndex: 10,
          boxShadow: "8",
        }}
      />
    </Box>
  );
};
