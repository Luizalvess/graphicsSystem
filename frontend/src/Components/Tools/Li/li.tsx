import { Box, Stack } from "@mui/material";

export const Li = ({ children }) => {
  return (
    <Stack
      sx={{
        border: "2px solid green",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        flexDirection: "row",
      }}
    >
      <Box
        width={"20px"}
        height={"20px"}
        bgcolor={"primary.light"}
        borderRadius={"50%"}
        padding={"3px"}
        marginRight={"10px"}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "black",
            border: "2px solid white ",
            borderRadius: "50%",
          }}
        />
      </Box>
      {children}
    </Stack>
  );
};
