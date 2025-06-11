import { TabMenu } from "../component/Tools/tabMenu";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { GoPaperclip } from "react-icons/go";

export const PrintVideo: React.FC = () => {
  return (
    <Box
      width={"100%"}
      height={"12%"}
      position={"relative"}
      borderRadius={"20px"}
      overflow={"hidden"}
    >
      <video
        width={"100%"}
        src="videoImpressao.mp4"
        loop
        muted
        autoPlay
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <Stack
        sx={{
          background:
            "linear-gradient(109deg, rgba(10, 12, 16, 0.99) 20%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%)",
          width: "100%",
          height: "350px",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />

      <Stack
        sx={{
          top: "0",
          left: "0",
          position: "absolute",
          width: "100%",
          height: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          height={"370px"}
          width={"370px"}
          borderRadius={"50%"}
          border={"2px solid white"}
          sx={{
            opacity: "0.1",
          }}
        />
        <Box
          position={"absolute"}
          height={"200px"}
          width={"200px"}
          borderRadius={"50%"}
          border={"2px solid white"}
          sx={{
            opacity: "0.1",
          }}
        />
        <Box
          marginLeft={"350px"}
          position={"absolute"}
          height={"200px"}
          width={"200px"}
          borderRadius={"50%"}
          border={"2px solid white"}
          sx={{
            opacity: "0.1",
          }}
        />
        <Box
          marginRight={"350px"}
          position={"absolute"}
          height={"200px"}
          width={"200px"}
          borderRadius={"50%"}
          border={"2px solid white"}
          sx={{
            opacity: "0.1",
          }}
        />
      </Stack>

      <Stack
        sx={{
          position: "absolute",
          top: "25px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          width: "80%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            textTransform: "none",
            color: "#fff",
            padding: "8px ",
            border: "1px solid #fff",
            borderRadius: "5px",
            marginBottom: "15px",
            letterSpacing: "1px",
          }}
        >
          Industria
        </Typography>
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{ textTransform: "none", color: "#fff" }}
        >
          Code com o melhor Gráfiga da Região
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textAlign: "center",
            padding: "10px 0",
            color: "#fff",
            lineHeight: "2.2rem",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam
          tempore assumenda reiciendis voluptatibus, veritatis ipsum
          exercitationem <br /> ratione enim obcaecati consequatur, accusantium
          doloremque possimus sint nesciunt laudantium quod fugit mollitia?
        </Typography>
        <Stack
          sx={{
            width: "45%",
            height: "90px",
            marginTop: "70px",
            flexDirection: "row",
            marginLeft: "50%",
            transform: "translate(-50%, 0%)",
            display: "flex",
            alignItems: "top",
            justifyContent: "space-between",
          }}
        >
          {/* Butons */}
          <TabMenu />
        </Stack>
      </Stack>

      <Stack
        sx={{
          padding: "10px 0",
          height: "340px",
          width: "100%",
          marginTop: "-5px",
          bgcolor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Paper
          sx={{
            height: "95%",
            width: "30%",
            boxShadow: 2,
            bgcolor: "primary.light",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              position: "absolute",
              top: "35px",
              right: "0",
              width: "205px",
              height: "40px",
              boxShadow: "2",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
              flexDirection: "row",
            }}
          >
            <GoPaperclip />
            <Typography
              variant={"h5"}
              sx={{
                marginLeft: "10px",
                color: "primary.main",
              }}
            >
              How can i Assist
            </Typography>
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "55%",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
            }}
          >
            <Typography
              variant={"h4"}
              sx={{ marginLeft: "-120px", color: "primary.main" }}
            >
              How can i Assist
            </Typography>
            <Typography variant={"h6"} sx={{ color: "primary.main" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              cupiditate consequatur? Mollitia eveniet hic corporis architecto!
              Nam, illum quisquam temporibus inventore ab, neque quis
              consequuntur velit, illo modi laboriosam corrupti.
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            height: "95%",
            width: "30%",
            boxShadow: 2,
            bgcolor: "primary.light",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              position: "absolute",
              top: "35px",
              right: "0",
              width: "205px",
              height: "40px",
              boxShadow: "2",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
              flexDirection: "row",
            }}
          >
            <GoPaperclip />
            <Typography
              variant={"h5"}
              sx={{
                marginLeft: "10px",
                color: "primary.main",
              }}
            >
              How can i Assist
            </Typography>
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "55%",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
            }}
          >
            <Typography
              variant={"h4"}
              sx={{ marginLeft: "-120px", color: "primary.main" }}
            >
              How can i Assist
            </Typography>
            <Typography variant={"h6"} sx={{ color: "primary.main" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              cupiditate consequatur? Mollitia eveniet hic corporis architecto!
              Nam, illum quisquam temporibus inventore ab, neque quis
              consequuntur velit, illo modi laboriosam corrupti.
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            height: "95%",
            width: "30%",
            boxShadow: 2,
            bgcolor: "primary.light",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              position: "absolute",
              top: "35px",
              right: "0",
              width: "205px",
              height: "40px",
              boxShadow: "2",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
              flexDirection: "row",
            }}
          >
            <GoPaperclip />
            <Typography
              variant={"h5"}
              sx={{
                marginLeft: "10px",
                color: "primary.main",
              }}
            >
              How can i Assist
            </Typography>
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "55%",
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "10px 0 0 10px",
              color: "text.secondary",
            }}
          >
            <Typography
              variant={"h4"}
              sx={{ marginLeft: "-120px", color: "primary.main" }}
            >
              How can i Assist
            </Typography>
            <Typography variant={"h6"} sx={{ color: "primary.main" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              cupiditate consequatur? Mollitia eveniet hic corporis architecto!
              Nam, illum quisquam temporibus inventore ab, neque quis
              consequuntur velit, illo modi laboriosam corrupti.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};
