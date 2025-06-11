import { LayoutOS } from "../../../shared";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React from "react";
import { TabControl } from "../Components/tools/TabControl";
import { ButtonBig } from "../Components/tools/ButtonBig";
import { GiTwoCoins } from "react-icons/gi";
import { TextOs } from "../Components/tools/Text";
import {
  CustomSelect,
  CustomTextField,
  DateTextField,
} from "../../../Components";
import { FaCheck, FaFilePdf } from "react-icons/fa";
import {
  IoIosCalculator,
  IoIosSave,
  IoLogoWhatsapp,
  IoMdPrint,
} from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { ButtonMedium } from "../Components/tools/ButtonMedium";
import { FaTruckRampBox } from "react-icons/fa6";

export const AddOS: React.FC = () => {
  const [checked, setChecked] = React.useState([0]);
  const [radioChecked, setRadioChecked] = React.useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = React.useState("entrega");

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const normalTexts = [
    "Mostrar o Valor do Metro",
    "Imprimir os Valores",
    "Valor individual do produto",
  ];
  const normalTextsTop = ["à vista", "à prazo", "Atacado"];
  const normalTextsTop1 = ["Ordem de Serviço", "Efetuar Orçamento"];

  const checkedTexts = [
    "Mostrar o Valor do Metro",
    "Imprimir os Valores",
    "Valor individual do produto",
  ];

  const checkedTextsTop = ["à vista", "à prazo", "Atacado"];
  const checkedTextsTop1 = ["Ordem de Serviço", "Efetuar Orçamento"];

  return (
    <LayoutOS>
      {/* Base */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"100%"}
        padding={"15px 15px"}
      >
        <Paper
          elevation={1}
          sx={{
            width: "92%",
            height: "93%",
            position: "relative",
            bgcolor: "primary.main",
            padding: "10px 15px",
            borderRadius: "10px",
            overflow: "scroll",
            scrollbarWidth: "none", // Para Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Para Chrome, Safari e outros WebKit browsers
            },
          }}
        >
          <Box component={"div"} width={"100%"}>
            <Box display={"flex"} flexDirection={"row"} height={"140px"}>
              <Stack
                padding={"15px"}
                width={"46%"}
                height={"100%"}
                display={"grid"}
                gridTemplateColumns={"repeat(4, 1fr)"}
                gridTemplateRows={"repeat(3, 1fr)"}
                gap={"10px"}
              >
                <CustomTextField
                  sx={{ width: "120px" }}
                  label="alterado por:"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />

                <DateTextField
                  sx={{ width: "160px" }}
                  label="atualizado em"
                  type="date"
                  name="update"
                  required
                />

                <DateTextField
                  sx={{ width: "100px" }}
                  label="atualizado em"
                  type="time"
                  name="update"
                  required
                />

                <List
                  sx={{
                    marginLeft: "-5px",
                    marginTop: "-15px",
                    gridRow: "span 3",
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "primary.main",
                  }}
                >
                  {[0, 1, 2].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    const isChecked = checked.includes(value);

                    return (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{
                          paddingY: "20px",
                          height: "25px",
                        }}
                      >
                        <ListItemButton
                          sx={{
                            paddingY: "0",
                            height: "25px",
                          }}
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={isChecked}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                color: isChecked
                                  ? "primary.light"
                                  : "primary.light",
                                "&.Mui-checked": {
                                  color: "text.secondary",
                                },
                              }}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={
                              isChecked
                                ? checkedTextsTop[value]
                                : normalTextsTop[value]
                            }
                            primaryTypographyProps={{
                              sx: {
                                color: isChecked ? "black" : "primary.light",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>

                <List
                  sx={{
                    gridColumn: "span 2 ",
                    gridRow: "span 3",
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "primary.main",
                  }}
                >
                  {[0, 1].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    const isChecked = checked.includes(value);

                    return (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ paddingY: "15px", height: "25px" }}
                      >
                        <ListItemButton
                          sx={{ paddingY: "0", height: "25px" }}
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={isChecked}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                color: isChecked
                                  ? "primary.light"
                                  : "primary.light",
                                "&.Mui-checked": {
                                  color: "text.secondary",
                                },
                              }}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={
                              isChecked
                                ? checkedTextsTop1[value]
                                : normalTextsTop1[value]
                            }
                            primaryTypographyProps={{
                              sx: {
                                color: isChecked ? "black" : "primary.light",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>

                <FormControlLabel
                  value="pVia"
                  control={
                    <Radio
                      sx={{
                        gridColumn: "3",
                        gridRow: "2",
                        color: "green",
                        "&.Mui-checked": { color: "green" },
                      }}
                    />
                  }
                  label="1ª via"
                />
                <FormControlLabel
                  sx={{ marginTop: "-10px" }}
                  value="sVia"
                  control={
                    <Radio
                      sx={{
                        gridColumn: "3",
                        gridRow: "3",
                        color: "green",
                        "&.Mui-checked": { color: "green" },
                      }}
                    />
                  }
                  label="2ª Via"
                />
              </Stack>
              <Stack width={"54%"} height={"100%"} display={"flex"}>
                <Stack
                  padding={"15px"}
                  width={"100%"}
                  height={"50%"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"10px"}
                >
                  <CustomTextField
                    sx={{ width: "100%" }}
                    label="descrição do clinte:"
                    type="text"
                    name="alterado"
                    required
                    fullWidth
                  />
                  <ButtonMedium
                    icon={FaTruckRampBox}
                    label="incluir"
                    sx={{
                      width: "30%",
                      height: "22%",
                    }}
                  />
                  <ButtonMedium
                    icon={FaTruckRampBox}
                    label="incluir"
                    sx={{
                      width: "30%",
                      height: "22%",
                    }}
                  />
                </Stack>

                <Stack
                  padding={"15px"}
                  width={"100%"}
                  height={"50%"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"10px"}
                >
                  <CustomTextField
                    sx={{ width: "40%" }}
                    label="alterado por:"
                    type="text"
                    name="nome do contato / outros"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "32%" }}
                    label="alterado por:"
                    type="text"
                    name="telefone"
                    required
                    fullWidth
                  />
                  <FormControl>
                    <InputLabel
                      sx={{
                        marginTop: "-8px",
                        fontSize: "1.4rem",
                        color: "text.primary",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Responsavêl:
                    </InputLabel>
                    <CustomSelect sx={{ width: "13VW" }}>
                      <MenuItem value="AC">AC</MenuItem>
                      <MenuItem value="Al">AL</MenuItem>
                      <MenuItem value="Visitante">SP</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Stack>
              </Stack>
            </Box>

            {/* body */}
            <Box height={"300px"} padding={"10px 0"}>
              <TabControl />
            </Box>

            {/* footer */}
            <Box
              marginTop={"20px"}
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              padding={"0 5px"}
            >
              <Box
                component={"div"}
                height={"300px"}
                width={"22%"}
                minWidth={"310px"}
                flexDirection={"row"}
                padding={"10px 0"}
                gap={"3px"}
              >
                <ButtonBig
                  icon={GiTwoCoins}
                  label="Formas de Pagamento"
                  sx={{
                    height: "65px",
                    marginBottom: "5px",
                  }}
                />

                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "primary.main",
                  }}
                >
                  {[0, 1, 2].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    const isChecked = checked.includes(value);

                    return (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ paddingY: "0", height: "25px" }}
                      >
                        <ListItemButton
                          sx={{ paddingY: "0", height: "25px" }}
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={isChecked}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                color: isChecked
                                  ? "primary.light"
                                  : "primary.light",
                                "&.Mui-checked": {
                                  color: "text.secondary",
                                },
                              }}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={
                              isChecked
                                ? checkedTexts[value]
                                : normalTexts[value]
                            }
                            primaryTypographyProps={{
                              sx: {
                                color: isChecked ? "black" : "primary.light",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>

                <FormControl sx={{ marginLeft: "15px" }}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={radioChecked}
                          onChange={(e) => setRadioChecked(e.target.checked)}
                          sx={{
                            color: "green",
                            "&.Mui-checked": { color: "green" },
                          }}
                        />
                      }
                      label="Data da aprovação"
                    />
                  </FormGroup>
                </FormControl>

                <DateTextField
                  sx={{ width: "160px", height: "40px", borderRadius: "10px" }}
                  type="date"
                  name="registerDate"
                  required
                />

                <FormControl sx={{ marginLeft: "15px" }}>
                  <RadioGroup
                    row
                    aria-labelledby="tipo-entrega-label"
                    name="tipo-servico"
                    value={opcaoSelecionada}
                    onChange={(e) => setOpcaoSelecionada(e.target.value)}
                  >
                    <FormControlLabel
                      value="entrega"
                      control={
                        <Radio
                          sx={{
                            color: "green",
                            "&.Mui-checked": { color: "green" },
                          }}
                        />
                      }
                      label="Entrega"
                    />
                    <FormControlLabel
                      value="retirada"
                      control={
                        <Radio
                          sx={{
                            color: "green",
                            "&.Mui-checked": { color: "green" },
                          }}
                        />
                      }
                      label="Retirada"
                    />
                  </RadioGroup>
                </FormControl>
                <Stack
                  sx={{
                    width: "305px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextOs
                    type="time"
                    sx={{
                      width: "120px",
                    }}
                  />

                  <DateTextField
                    sx={{
                      width: "160px",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                    type="date"
                    name="registerDate"
                    required
                  />
                </Stack>
              </Box>

              <Box
                component={"div"}
                height={"300px"}
                width={"25%"}
                flexDirection={"column"}
                padding={"10px 5px"}
                display={"flex"}
                gap={"5px"}
                justifyContent={"space-between"}
              >
                <ButtonBig
                  icon={IoLogoWhatsapp}
                  label="Enviar mensagem WhatsApp"
                  sx={{
                    marginBottom: "5px",
                  }}
                />
                <ButtonBig
                  icon={IoIosCalculator}
                  label="Calculadora "
                  sx={{
                    marginBottom: "5px",
                  }}
                />
                <ButtonBig
                  icon={TbReportSearch}
                  label="Relatório"
                  sx={{
                    marginBottom: "5px",
                  }}
                />
              </Box>

              <Box
                component={"div"}
                height={"300px"}
                width={"25%"}
                flexDirection={"column"}
                padding={"10px 0"}
                display={"flex"}
                gap={"5px"}
                justifyContent={"space-between"}
              >
                <ButtonBig
                  icon={FaFilePdf}
                  label="Gerar arquivo em PDF"
                  sx={{
                    marginBottom: "5px",
                    height: "22%",
                  }}
                />
                <ButtonBig
                  icon={IoMdPrint}
                  label="imprimir Ordem de serviço "
                  sx={{
                    marginBottom: "5px",
                    height: "22%",
                  }}
                />
                <ButtonBig
                  icon={IoIosSave}
                  label="salvar "
                  sx={{
                    marginBottom: "5px",
                    height: "22%",
                  }}
                />
                <ButtonBig
                  icon={FaCheck}
                  label="finalizar"
                  sx={{
                    marginBottom: "5px",
                    height: "22%",
                  }}
                />
              </Box>

              <Box
                component={"div"}
                height={"300px"}
                width={"25%"}
                flexDirection={"column"}
                padding={"10px 0"}
                display={"flex"}
                gap={"5px"}
                justifyContent={"space-between"}
                paddingLeft={"25px"}
              >
                <CustomTextField
                  sx={{ borderRadius: "5px" }}
                  label="Valor dos Produtos:"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />
                <CustomTextField
                  sx={{ borderRadius: "5px" }}
                  label="Valor dos Serviços:"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />
                <CustomTextField
                  sx={{ borderRadius: "5px" }}
                  label="Frete:"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />
                <CustomTextField
                  sx={{ borderRadius: "5px" }}
                  label="Descontos :"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />
                <CustomTextField
                  sx={{ borderRadius: "5px" }}
                  label="Valor Total:"
                  type="text"
                  name="alterado"
                  required
                  fullWidth
                />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </LayoutOS>
  );
};
