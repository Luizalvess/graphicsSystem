import { Box, Stack, Typography, Paper } from "@mui/material";
import React from "react";

export const OffsetPrint: React.FC = () => {
  return (
    <Box
      width={"100%"}
      height={"7.83%"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding={"15px"}
      bgcolor={"primary.main"}
      borderRadius={"20px"}
    >
      <Stack
        sx={{
          width: "64%",
          height: "100%",
          justifyContent: "left",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textTransform: "uppercase", color: "text.primary" }}
        >
          impressão offset
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "90%",
            position: "absolute",
            bottom: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              padding: "15px 0 ",
              width: "20%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_1.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_2.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_3.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              padding: "15px 10px ",
              width: "28%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              padding: "15px 0 ",
              width: "20%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_4.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_5.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
            <Paper
              sx={{
                width: "100%",
                height: "31%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component={"img"}
                width={"100%"}
                height={"100%"}
                src="quadrado__Página_6.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              />
            </Paper>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              padding: "15px 10px ",
              width: "28%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              {" "}
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              dolor fit dor
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: "primary.contrastText",
                textIndent: "15px",
              }}
            >
              Lorem fipsum dolor, sidftd gdteggs ametss consectetur adipisicing
              serssre ddsdselit. Consequatiurddd asperiores esse porrox df
              dfrtya ddcsss
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          width: "34%",
          height: "100%",
          justifyContent: "left",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Stack
          height={"15%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"right"}
        >
          <Paper
            sx={{
              width: "10%",
              height: "60%",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <Box
              component={"img"}
              width={"100%"}
              height={"100%"}
              src="retrato__Página_1.jpg"
              sx={{
                objectFit: "cover",
              }}
            />
          </Paper>
          <Paper
            sx={{
              width: "10%",
              height: "60%",
              marginLeft: "15px",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Box
              component={"img"}
              width={"100%"}
              height={"100%"}
              src="retrato__Página_2.jpg"
              sx={{
                objectFit: "cover",
              }}
            />
          </Paper>
          <Paper
            sx={{
              width: "10%",
              height: "60%",
              marginLeft: "15px",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Box
              component={"img"}
              width={"100%"}
              height={"100%"}
              src="retrato__Página_3.jpg"
              sx={{
                objectFit: "cover",
              }}
            />
          </Paper>
        </Stack>
        <Paper
          sx={{
            width: "95%",
            height: "85%",
            position: "absolute",
            right: "0",
            bottom: "15px",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src="retrato__Página_1.jpg"
            sx={{
              objectFit: "cover",
            }}
          />
        </Paper>
      </Stack>
    </Box>
  );
};
