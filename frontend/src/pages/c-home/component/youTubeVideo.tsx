import { Box } from "@mui/material";

export const YouTubeVideo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "98.2%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "gray",
        borderRadius: "10px",
        paddingTop: "55.25%", // Mantém proporção 16:9 (9 / 16 = 0.5625)
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/1If3L7ENa6I?si=8vFYhOgqNb5--v4o"
        title="YouTube video"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "10px",
        }}
      />
    </Box>
  );
};
