import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Environment } from "@/environment";

type TemperatureUnit = "C" | "F";

export const WeatherDisplay: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [unit, setUnit] = useState<TemperatureUnit>("C");
  const [loading, setLoading] = useState<boolean>(true);
  const [flipped, setFlipped] = useState<boolean>(false);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat,
            lon,
            appid: Environment.API_KEY,
            units: "metric",
            lang: "pt_br",
          },
        }
      );
      const temp = response.data.main.temp;
      setTemperature(parseFloat(temp.toFixed(2)));
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.warn("Erro de geolocalização:", error.message);
          console.log("Usando localização padrão (Rio de Janeiro)");
          // Fallback para Rio de Janeiro
          fetchWeather(-22.9068, -43.1729);
        },
        {
          enableHighAccuracy: false, // Use less accurate but more reliable positioning
          timeout: 10000, // 10 seconds timeout
          maximumAge: 300000, // Accept cached position up to 5 minutes old
        }
      );
    } else {
      console.warn("Geolocalização não suportada.");
      fetchWeather(-22.9068, -43.1729);
    }
  }, []);

  const convertTemperature = (temp: number, to: TemperatureUnit): number =>
    to === "F" ? temp * 1.8 + 32 : (temp - 32) / 1.8;

  const handleToggleUnit = () => {
    if (temperature === null) return;

    setFlipped(true);

    setTimeout(() => {
      const newUnit = unit === "C" ? "F" : "C";
      const newTemp = convertTemperature(temperature, newUnit);
      setTemperature(parseFloat(newTemp.toFixed(2)));
      setUnit(newUnit);
      setFlipped(false);
    }, 300);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      {loading ? (
        <CircularProgress />
      ) : temperature !== null ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            perspective: "1000px",
            cursor: "pointer",
          }}
          onClick={handleToggleUnit}
          title="Clique para alternar entre °C e °F"
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              boxShadow: 16,
              transformStyle: "preserve-3d",
              transition: "transform 0.6s",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
              backfaceVisibility: "hidden",
            }}
          >
            <Typography
              component="div"
              sx={{ fontSize: "1.7em", fontWeight: "bold" }}
            >
              {temperature}°{unit}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>Erro ao carregar temperatura.</Typography>
      )}
    </Box>
  );
};
