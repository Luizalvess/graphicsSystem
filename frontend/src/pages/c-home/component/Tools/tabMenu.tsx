import { useState } from "react";
import { Box, Paper } from "@mui/material";
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BsPiggyBank } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";

const icons = [
  <IoHomeOutline />,
  <FiShoppingCart />,
  <GoBriefcase />,
  <BsPiggyBank />,
  <FaRegChartBar />,
];

export const TabMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Box display="flex">
      {icons.map((icon, index) => (
        <Box
          key={index}
          marginRight={"10px"}
          overflow={"hidden"}
          textAlign={"center"}
          sx={{
            borderBottom: selectedIndex === index ? "4px solid green" : "none",
            transition: "0.3s",
          }}
        >
          <Box
            padding={"10px"}
            borderRadius={"5px"}
            sx={(theme) => ({
              border: `2px solid ${theme.palette.primary.light}`,
              overflow: "hidden",
            })}
          >
            <Paper
              onClick={() => setSelectedIndex(index)}
              sx={{
                width: "55px",
                height: "55px",
                bgcolor: "primary.light",
                boxShadow: "none",
                cursor: "pointer",
                color: "primary.main",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.4s",
                "&:hover": {
                  opacity: "0.9",
                  color: "text.secondary",
                },
                "&:active": {
                  opacity: "0.9",
                  boxShadow: "5",
                },
              }}
            >
              {icon}
            </Paper>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
