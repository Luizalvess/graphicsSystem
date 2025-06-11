import { Box, Button } from "@mui/material";
import { Link } from "react-scroll";

const sections = [
  { id: "slide", label: "Slide" },
  { id: "chat-favorite", label: "Chat" },
  { id: "news", label: "Notícias" },
  { id: "offset-history", label: "História" },
  { id: "grid", label: "Grid" },
  // Adicione mais seções conforme necessário
];

export const SectionNav = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        zIndex: 1000,
      }}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          spy={true}
          smooth={true}
          duration={500}
          containerId="homeRef" // Deve corresponder ao ID do seu contêiner de rolagem
        >
          <Button
            variant="contained"
            size="small"
            sx={{ minWidth: "40px", height: "40px", borderRadius: "50%" }}
          >
            {section.label.charAt(0)}
          </Button>
        </Link>
      ))}
    </Box>
  );
};
