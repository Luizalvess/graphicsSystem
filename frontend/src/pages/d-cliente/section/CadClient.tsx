import { useState } from "react";
import {
  ButtonIcon,
  ButtonWhite,
  CheckboxCustom,
  CustomSelect,
  CustomTextBox,
  CustomTextField,
  DateTextField,
} from "../../../Components";
import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FaCameraRetro, FaCheck, FaDeleteLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {
  FaCartPlus,
  FaClipboardList,
  FaCoins,
  FaPlusCircle,
} from "react-icons/fa";

import {
  maskCEP,
  maskCPF,
  maskInscricaoEstadual,
  maskMobile,
  maskPhone,
  maskRGorCNH,
} from "../../../shared/utils/mask";

// import { useClient } from "../../../../shared/context/auth/AuthClientContext";
// import { IClient } from "../../../../shared/state/clientTypes";

// const initialClient: IClient = {
//   person: 'FISICA',
//   registerDate: new Date(), // Add the required registerDate
//   name: '',
//   corporateName: '',
//   contact: '',
//   phone: '',
//   mobile: '',
//   whatsapp: '',
//   dateOfBirth: null,
//   gender: '',
//   stateRegistration: '',
//   document: '',
//   isSimpleNational: false,
//   category: 'CONSUMIDOR',
//   address: {
//     cep: '',
//     street: '',
//     number: '',
//     complement: '',
//     neighborhood: '',
//     city: '',
//     state: ''
//   },
//   emails: {
//     commercial: '',
//     invoice: '',
//     billing: ''
//   }
// };

export const CadClient: React.FC = () => {
  //   const [client, setClient] = useState(initialClient);
  //   const [loading, setLoading] = useState(false);
  //   const { createClient } = useClient();

  //   const validateForm = () => {
  //     if (!client.name || !client.person || !client.contact || !client.document) {
  //       return "Campos obrigatórios não preenchidos";
  //     }
  //     if (client.emails.commercial && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client.emails.commercial)) {
  //       return "Email comercial inválido";
  //     }
  //     return null;
  //   };

  //   const handleSubmit = async () => {
  //     const error = validateForm();
  //     if (error) {
  //       // Show error message
  //       return;
  //     }

  //     setLoading(true);
  //     try {
  //       await createClient(client);
  //       handleReset();
  //       // Show success message
  //     } catch (error) {
  //       // Show error message
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleReset = () => {
  //     setClient(initialClient);
  //   };

  //   const handleDateChange = (name: string) => (date: Date | null) => {
  //     setClient(prev => ({
  //       ...prev,
  //       [name]: date
  //     }));
  //   };

  // };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "96%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
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
          }}
        >
          <Typography variant="h3">Cadastro de Cliente</Typography>
          <Stack
            sx={{ position: "absolute", right: "15px", top: "20px" }}
            marginTop={"-5px"}
            direction="row"
            spacing={2}
          >
            <ButtonIcon
              type="button"
              label="Pesq. Vendas"
              to="/vendas"
              icon={FaCartPlus}
            />
            <ButtonIcon label="Pesq. OS" to="/os" icon={FaClipboardList} />
            <ButtonIcon label="P. Financeiro" to="/financeiro" icon={FaCoins} />
          </Stack>
          <Box
            sx={{
              height: "92%",
              position: "relative",
              marginTop: "15px",
              display: "flex",
              justifyContent: "left",
              overflow: "auto",
            }}
          >
            <Stack
              display={"flex"}
              width={"20%"}
              height={"50vh"}
              alignContent={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              {/* Foto do usuario */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    margin: "1rem 0",
                    width: "200px",
                    height: "200px",
                    boxShadow: "1",
                    padding: "8px",
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Avatar>
                </Paper>

                <Stack marginTop={"15px"} spacing={2}>
                  <ButtonIcon
                    name="addFoto"
                    type="button"
                    label="Add Foto"
                    icon={FaPlusCircle}
                  />
                </Stack>
              </Box>
            </Stack>

            <Box
              padding={"25px 0"}
              width={"80%"}
              position={"relative"}
              bgcolor={"primary.main"}
              marginLeft={"12px"}
              sx={{
                overflowY: "scroll",
                scrollbarWidth: "none", // Para Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Para Chrome, Safari e outros WebKit browsers
                },
              }}
            >
              <Box margin={"15px 0 "}>
                <InputLabel
                  sx={{
                    marginTop: "-8px",
                    letterSpacing: "1px",
                    fontSize: "1.7rem",
                    color: "text.primary",
                    textTransform: "uppercase",
                    wordSpacing: "2px",
                  }}
                >
                  Permissões de usuário:
                </InputLabel>

                {/* 1º Fileira  */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  {/* Id */}
                  <Stack sx={{ width: "12%" }}>
                    <CustomTextField
                      label="id*"
                      name="id"
                      sx={{ width: "100%" }}
                    />
                  </Stack>
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
                      pessoa
                    </InputLabel>
                    <CustomSelect name="person" sx={{ width: "210px" }}>
                      <MenuItem value="Usuário">Física</MenuItem>
                      <MenuItem value="Visitante">Juridica</MenuItem>
                    </CustomSelect>
                  </FormControl>
                  <DateTextField
                    label="cadastrado em:"
                    type="date"
                    name="registerDate"
                    required
                  />

                  <DateTextField
                    label="atualizado em"
                    type="date"
                    name="update"
                    required
                  />

                  <CustomTextField
                    sx={{ width: "20%" }}
                    label="alterado por:"
                    type="text"
                    name="alterado"
                    required
                    fullWidth
                  />
                </Stack>

                <InputLabel
                  sx={{
                    marginTop: "15px",
                    letterSpacing: "1px",
                    fontSize: "1.7rem",
                    color: "text.primary",
                    textTransform: "uppercase",
                    wordSpacing: "2px",
                  }}
                >
                  Dados pessois:
                </InputLabel>

                {/* 2ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "25%" }}
                    label="Nome"
                    type="text"
                    name="name"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "25%" }}
                    label="Razão Social"
                    type="text"
                    name="corporateName"
                    required
                    fullWidth
                  />

                  <CustomTextField
                    sx={{ width: "25%" }}
                    label="contato"
                    type="text"
                    name="contact"
                    required
                    fullWidth
                  />

                  <CustomTextField
                    sx={{ width: "20%" }}
                    type="tel"
                    label="telefone"
                    name="phone"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskPhone(e.target.value);
                    }}
                  />
                </Stack>

                {/* 3ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "20%" }}
                    label="celular"
                    type="tel"
                    name="mobile"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskMobile(e.target.value);
                    }}
                  />
                  <CustomTextField
                    sx={{ width: "20%" }}
                    label="whatsapp"
                    type="text"
                    name="whatsapp"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskPhone(e.target.value);
                    }}
                  />
                  <DateTextField
                    label="data de nascimento"
                    type="date"
                    name="dateofbirth"
                    required
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
                      Sexo
                    </InputLabel>
                    <CustomSelect sx={{ width: "14vw" }} name="userType">
                      <MenuItem value="Usuário">Masculino</MenuItem>
                      <MenuItem value="Visitante">Feminino</MenuItem>
                    </CustomSelect>
                  </FormControl>

                  <CustomTextField
                    sx={{ width: "18%" }}
                    type="text"
                    name="inscricaoEstadual"
                    label="inscri. estadual"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskInscricaoEstadual(e.target.value);
                    }}
                  />
                </Stack>

                {/* 4ª Fileira */}
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "20%" }}
                    label="RG/ CNH"
                    type="text"
                    name="rgCnh"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskRGorCNH(e.target.value);
                    }}
                  />
                  <CustomTextField
                    sx={{ width: "20%" }}
                    label="CPF"
                    type="text"
                    name="rgCnh"
                    required
                    fullWidth
                    onChange={(e) => {
                      e.target.value = maskCPF(e.target.value);
                    }}
                  />
                  <Box
                    marginBottom={"-50px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={"35px"}
                    padding={"0 15px"}
                  >
                    {" "}
                    <CheckboxCustom />
                    <InputLabel
                      sx={{
                        letterSpacing: "1px",
                        fontSize: "1.3rem",
                        color: "text.primary",
                        textTransform: "uppercase",
                        wordSpacing: "2px",
                        fontWeight: "100",
                      }}
                    >
                      optante simples nacional
                    </InputLabel>
                  </Box>

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
                      categoria
                    </InputLabel>
                    <CustomSelect sx={{ width: "18vw" }}>
                      <MenuItem value="Usuário">Consumidor</MenuItem>
                      <MenuItem value="Visitante">Revenda</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Stack>

                {/* 5ª Fileira */}
                <InputLabel
                  sx={{
                    marginTop: "15px",
                    letterSpacing: "1px",
                    fontSize: "1.7rem",
                    color: "text.primary",
                    textTransform: "uppercase",
                    wordSpacing: "2px",
                  }}
                >
                  Endereço do cliente:
                </InputLabel>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      width: "180px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                    <CustomTextField
                      sx={{ width: "65.7%", marginRight: "5px" }}
                      type="text"
                      label="cep"
                      name="cep"
                      required
                      fullWidth
                      onChange={(e) => {
                        e.target.value = maskCEP(e.target.value);
                      }}
                    />
                    <ButtonWhite icon={IoSearchOutline} />
                  </Box>

                  <CustomTextField
                    sx={{ width: "22%" }}
                    type="text"
                    label="endereço"
                    name="address"
                    required
                    fullWidth
                  />

                  <CustomTextField
                    sx={{ width: "10%" }}
                    type="text"
                    label="Nº"
                    name="number"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "22%" }}
                    type="text"
                    label="complemento"
                    name="address"
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "22%" }}
                    type="text"
                    label="bairro"
                    name="neighborhood"
                    fullWidth
                  />
                </Stack>

                {/* 6ª fileira  */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "20%" }}
                    type="text"
                    label="cidade"
                    name="city"
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
                      UF
                    </InputLabel>
                    <CustomSelect sx={{ width: "6VW" }}>
                      <MenuItem value="AC">AC</MenuItem>
                      <MenuItem value="Al">AL</MenuItem>
                      <MenuItem value="Visitante">SP</MenuItem>
                      <MenuItem value="Visitante">AP</MenuItem>
                      <MenuItem value="Visitante">AM</MenuItem>
                      <MenuItem value="Visitante">BA</MenuItem>
                      <MenuItem value="Visitante">CE</MenuItem>
                      <MenuItem value="Visitante">ES</MenuItem>
                      <MenuItem value="Visitante">GO</MenuItem>
                      <MenuItem value="Visitante">MA</MenuItem>
                      <MenuItem value="Visitante">MT</MenuItem>
                      <MenuItem value="Visitante">SP</MenuItem>
                      <MenuItem value="Visitante">MS</MenuItem>
                      <MenuItem value="Visitante">MG</MenuItem>
                      <MenuItem value="Visitante">PA</MenuItem>
                      <MenuItem value="Visitante">PB</MenuItem>
                      <MenuItem value="Visitante">PR</MenuItem>
                      <MenuItem value="Visitante">PE</MenuItem>
                      <MenuItem value="Visitante">PI</MenuItem>
                      <MenuItem value="Visitante">RJ</MenuItem>
                      <MenuItem value="Visitante">RN</MenuItem>
                      <MenuItem value="Visitante">RS</MenuItem>
                      <MenuItem value="Visitante">RO</MenuItem>
                      <MenuItem value="Visitante">RR</MenuItem>
                      <MenuItem value="Visitante">SC</MenuItem>
                      <MenuItem value="Visitante">SP</MenuItem>
                      <MenuItem value="Visitante">SE</MenuItem>
                      <MenuItem value="Visitante">TO</MenuItem>
                      <MenuItem value="Visitante">DF</MenuItem>
                    </CustomSelect>
                  </FormControl>

                  <CustomTextField
                    sx={{ width: "21%" }}
                    type="email"
                    label="e-mail comercial"
                    name="emailComercial"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "21%" }}
                    type="email"
                    label="e-email de envio de NF"
                    name="emailNF"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "21%" }}
                    type="email"
                    label="e-email de cobrança"
                    name="emailCobrança"
                    required
                    fullWidth
                  />
                </Stack>

                {/* 7ª Fileira */}
                <InputLabel
                  sx={{
                    marginTop: "15px",
                    letterSpacing: "1px",
                    fontSize: "1.7rem",
                    color: "text.primary",
                    textTransform: "uppercase",
                    wordSpacing: "2px",
                  }}
                >
                  endereço de entrega:
                </InputLabel>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
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
                      Entregar
                    </InputLabel>
                    <CustomSelect sx={{ width: "12VW" }}>
                      <MenuItem value="Usuário">Mesmo endereço</MenuItem>
                      <MenuItem value="Visitante">Outro endereço</MenuItem>
                    </CustomSelect>
                  </FormControl>
                  <Box
                    sx={{
                      width: "18%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                    <CustomTextField
                      sx={{ width: "70%", marginRight: "5px" }}
                      type="text"
                      label="cep"
                      name="cep"
                      required
                      fullWidth
                      onChange={(e) => {
                        e.target.value = maskCEP(e.target.value);
                      }}
                    />
                    <ButtonWhite icon={IoSearchOutline} />
                  </Box>
                  <CustomTextField
                    sx={{ width: "29%" }}
                    type="text"
                    label="endereço"
                    name="address"
                    required
                  />
                  <CustomTextField
                    sx={{ width: "10%" }}
                    type="text"
                    label="Nº"
                    name="number"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "22%" }}
                    type="text"
                    label="complemento"
                    name="address"
                    fullWidth
                  />
                </Stack>

                {/* 8ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "21%" }}
                    type="text"
                    label="bairro"
                    name="neighborhood"
                    required
                  />
                  <CustomTextField
                    sx={{ width: "21%", margin: "0 15px" }}
                    type="text"
                    label="cidade"
                    name="city"
                    required
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
                      UF
                    </InputLabel>
                    <CustomSelect sx={{ width: "6VW" }}>
                      <MenuItem value="ac">AC</MenuItem>
                      <MenuItem value="al">AL</MenuItem>
                      <MenuItem value="ap">AP</MenuItem>
                      <MenuItem value="am">AM</MenuItem>
                      <MenuItem value="ba">BA</MenuItem>
                      <MenuItem value="ce">CE</MenuItem>
                      <MenuItem value="es">ES</MenuItem>
                      <MenuItem value="go">GO</MenuItem>
                      <MenuItem value="ma">MA</MenuItem>
                      <MenuItem value="mt">MT</MenuItem>
                      <MenuItem value="ms">MS</MenuItem>
                      <MenuItem value="mg">MG</MenuItem>
                      <MenuItem value="pa">PA</MenuItem>
                      <MenuItem value="pb">PB</MenuItem>
                      <MenuItem value="pr">PR</MenuItem>
                      <MenuItem value="pe">PE</MenuItem>
                      <MenuItem value="pi">PI</MenuItem>
                      <MenuItem value="rj">RJ</MenuItem>
                      <MenuItem value="rn">RN</MenuItem>
                      <MenuItem value="rs">RS</MenuItem>
                      <MenuItem value="ro">RO</MenuItem>
                      <MenuItem value="sc">SC</MenuItem>
                      <MenuItem value="sp">SP</MenuItem>
                      <MenuItem value="se">SE</MenuItem>
                      <MenuItem value="to">TO</MenuItem>
                      <MenuItem value="df">DF</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Stack>

                {/* 9ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextBox
                    fullWidth
                    multiline
                    rows={3}
                    label="Referência do local da entrega "
                  />
                </Stack>

                {/* 10ª Fileira */}
                <InputLabel
                  sx={{
                    marginTop: "15px",
                    letterSpacing: "1px",
                    fontSize: "1.7rem",
                    color: "text.primary",
                    textTransform: "uppercase",
                    wordSpacing: "2px",
                  }}
                >
                  endereço de cobrança:
                </InputLabel>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
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
                      Entregar
                    </InputLabel>
                    <CustomSelect sx={{ width: "12VW" }}>
                      <MenuItem value="Usuário">Mesmo endereço</MenuItem>
                      <MenuItem value="Visitante">Outro endereço</MenuItem>
                    </CustomSelect>
                  </FormControl>

                  <Box
                    sx={{
                      width: "18%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                    <CustomTextField
                      sx={{ width: "70%", marginRight: "5px" }}
                      type="text"
                      label="cep"
                      name="cep"
                      required
                      fullWidth
                      onChange={(e) => {
                        e.target.value = maskCEP(e.target.value);
                      }}
                    />
                    <ButtonWhite icon={IoSearchOutline} />
                  </Box>
                  <CustomTextField
                    sx={{ width: "29%" }}
                    type="text"
                    label="endereço"
                    name="address"
                    required
                  />
                  <CustomTextField
                    sx={{ width: "10%" }}
                    type="text"
                    label="Nº"
                    name="number"
                    required
                    fullWidth
                  />
                  <CustomTextField
                    sx={{ width: "22%" }}
                    type="text"
                    label="complemento"
                    name="address"
                    fullWidth
                  />
                </Stack>

                {/* 11ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextField
                    sx={{ width: "21%" }}
                    type="text"
                    label="bairro"
                    name="neighborhood"
                    required
                  />
                  <CustomTextField
                    sx={{ width: "21%", margin: "0 15px" }}
                    type="text"
                    label="cidade"
                    name="city"
                    required
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
                      UF
                    </InputLabel>
                    <CustomSelect sx={{ width: "6VW" }}>
                      <MenuItem value="ac">AC</MenuItem>
                      <MenuItem value="al">AL</MenuItem>
                      <MenuItem value="ap">AP</MenuItem>
                      <MenuItem value="am">AM</MenuItem>
                      <MenuItem value="ba">BA</MenuItem>
                      <MenuItem value="ce">CE</MenuItem>
                      <MenuItem value="es">ES</MenuItem>
                      <MenuItem value="go">GO</MenuItem>
                      <MenuItem value="ma">MA</MenuItem>
                      <MenuItem value="mt">MT</MenuItem>
                      <MenuItem value="ms">MS</MenuItem>
                      <MenuItem value="mg">MG</MenuItem>
                      <MenuItem value="pa">PA</MenuItem>
                      <MenuItem value="pb">PB</MenuItem>
                      <MenuItem value="pr">PR</MenuItem>
                      <MenuItem value="pe">PE</MenuItem>
                      <MenuItem value="pi">PI</MenuItem>
                      <MenuItem value="rj">RJ</MenuItem>
                      <MenuItem value="rn">RN</MenuItem>
                      <MenuItem value="rs">RS</MenuItem>
                      <MenuItem value="ro">RO</MenuItem>
                      <MenuItem value="sc">SC</MenuItem>
                      <MenuItem value="sp">SP</MenuItem>
                      <MenuItem value="se">SE</MenuItem>
                      <MenuItem value="to">TO</MenuItem>
                      <MenuItem value="df">DF</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Stack>

                {/* 12ª Fileira */}
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "25px",
                    flexDirection: "row",
                  }}
                >
                  <CustomTextBox
                    fullWidth
                    multiline
                    rows={3}
                    label="Referência do local da entrega "
                  />
                </Stack>

                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box width={"50%"} height={"auto"}>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
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
                          tipo de cliente
                        </InputLabel>
                        <CustomSelect sx={{ width: "17VW" }}>
                          <MenuItem value="Usuário">Vip</MenuItem>
                          <MenuItem value="Visitante">Normal</MenuItem>
                          <MenuItem value="Visitante">Premium </MenuItem>
                          <MenuItem value="Visitante">Frequente </MenuItem>
                          <MenuItem value="Visitante">Novo </MenuItem>
                          <MenuItem value="Visitante">Corporativo </MenuItem>
                          <MenuItem value="Visitante">Inadimplente </MenuItem>
                          <MenuItem value="Visitante">Atacado </MenuItem>
                          <MenuItem value="Visitante">Varejo </MenuItem>
                        </CustomSelect>
                      </FormControl>
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
                          transportadora
                        </InputLabel>
                        <CustomSelect sx={{ width: "17VW" }}>
                          <MenuItem value="correios">Correios </MenuItem>
                          <MenuItem value="sedex10">Sedex 10</MenuItem>
                          <MenuItem value="agExpress">AG Express</MenuItem>
                          <MenuItem value="brasilTotalExpress">
                            {" "}
                            Brasil Total Express
                          </MenuItem>
                          <MenuItem value="brasilMaxiLogistica">
                            Brasilmaxi Logística
                          </MenuItem>
                          <MenuItem value="brasilLog">Brasil Log</MenuItem>
                          <MenuItem value="brExpress">BR Express</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomTextField
                        sx={{ width: "18%" }}
                        type="text"
                        label="id"
                        name="id"
                        required
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
                          vendedor
                        </InputLabel>
                        <CustomSelect sx={{ width: "13VW" }}>
                          <MenuItem value="escolhaUmVendedor">
                            Escolha um vendedor
                          </MenuItem>
                        </CustomSelect>
                      </FormControl>

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
                          tabela de preço
                        </InputLabel>
                        <CustomSelect sx={{ width: "13VW" }}>
                          <MenuItem value="cinquenta">01 - Padrão</MenuItem>
                          <MenuItem value="sessenta">
                            02 - Preço Elevado
                          </MenuItem>
                          <MenuItem value="setenta">03 - Mais Barato</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
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
                          cliente exclusivo
                        </InputLabel>
                        <CustomSelect sx={{ width: "17VW" }}>
                          <MenuItem value="Usuário">sim</MenuItem>
                          <MenuItem value="Visitante">não</MenuItem>
                        </CustomSelect>
                      </FormControl>
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
                          estatus do cliente
                        </InputLabel>
                        <CustomSelect sx={{ width: "17VW" }}>
                          <MenuItem value="bloqueado">Bloqueado</MenuItem>
                          <MenuItem value="restrito">Restrito</MenuItem>
                          <MenuItem value="liberado">Liberado</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          marginRight: "10px",
                          textTransform: "uppercase",
                          fontSize: "1.2rem",
                        }}
                      >
                        limite de crédito:
                      </Typography>
                      <CustomTextField
                        sx={{ width: "20%" }}
                        type="text"
                        label="$:00,00"
                        name="creditLimit"
                        required
                      />
                    </Stack>
                    <Stack
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          marginRight: "10px",
                          textTransform: "uppercase",
                          fontSize: "1.2rem",
                        }}
                      >
                        taxa de comissão:
                      </Typography>

                      <FormControl>
                        <CustomSelect sx={{ width: "6VW" }}>
                          <MenuItem value="zeroPorcento">0%</MenuItem>
                          <MenuItem value="cincoPorcento">5%</MenuItem>
                          <MenuItem value="dezPorcento">10%</MenuItem>
                          <MenuItem value="quinsePorcento">15%</MenuItem>
                          <MenuItem value="vintePorcento">20%</MenuItem>
                          <MenuItem value="vinteCincoPorcento">25%</MenuItem>
                          <MenuItem value="trintaPorcento">30%</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                    <Stack
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          marginRight: "10px",
                          textTransform: "uppercase",
                          fontSize: "1.2rem",
                        }}
                      >
                        desconto padrão:
                      </Typography>
                      <FormControl>
                        <CustomSelect sx={{ width: "6VW" }}>
                          <MenuItem value="zeroPorcento">0%</MenuItem>
                          <MenuItem value="cincoPorcento">5%</MenuItem>
                          <MenuItem value="dezPorcento">10%</MenuItem>
                          <MenuItem value="quinsePorcento">15%</MenuItem>
                          <MenuItem value="vintePorcento">20%</MenuItem>
                          <MenuItem value="vinteCincoPorcento">25%</MenuItem>
                          <MenuItem value="trintaPorcento">30%</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{ textTransform: "uppercase", fontSize: "1.2rem" }}
                      >
                        conta vencida à
                      </Typography>
                      <FormControl>
                        <CustomSelect sx={{ width: "5VW", margin: "0 10px" }}>
                          <MenuItem value="zeroPorcento">01</MenuItem>
                          <MenuItem value="cincoPorcento">02</MenuItem>
                          <MenuItem value="dezPorcento">03</MenuItem>
                          <MenuItem value="quinsePorcento">04</MenuItem>
                          <MenuItem value="vintePorcento">05</MenuItem>
                          <MenuItem value="vinteCincoPorcento">10</MenuItem>
                          <MenuItem value="trintaPorcento">15</MenuItem>
                          <MenuItem value="trintaPorcento">20</MenuItem>
                          <MenuItem value="trintaPorcento">25</MenuItem>
                          <MenuItem value="trintaPorcento">30</MenuItem>
                        </CustomSelect>
                      </FormControl>
                      <Typography
                        sx={{ textTransform: "uppercase", fontSize: "1.2rem" }}
                      >
                        dias.
                      </Typography>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "25px",
                        flexDirection: "row",
                      }}
                    >
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
                          forma de pagamento
                        </InputLabel>
                        <CustomSelect sx={{ width: "19VW" }}>
                          <MenuItem value="Usuário">maria de fatima</MenuItem>
                          <MenuItem value="Visitante">Paula dutra</MenuItem>
                        </CustomSelect>
                      </FormControl>
                    </Stack>
                  </Box>
                  <Box paddingLeft={"15px"} width={"50%"} height={"auto"}>
                    <Stack
                      marginTop={"-40px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <CustomTextBox
                        sx={{ width: "100%" }}
                        label={"observações sobre a venda "}
                        multiline
                        rows={8}
                      />
                    </Stack>
                    <Stack
                      sx={{
                        marginTop: "25px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <CustomTextBox
                        sx={{ width: "100%" }}
                        label={"observações diversas "}
                        multiline
                        rows={8}
                      />
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Roda-pé */}
      <Box
        sx={{
          width: "98%",
          height: "6%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          bgcolor: "primary,main",
          paddingRight: "4%",
          paddingBottom: "10px",
        }}
      >
        <Stack marginTop={"-10px"} direction="row" spacing={2}>
          <ButtonIcon type="button" label="Cadastrar" icon={FaCheck} />
          <ButtonIcon label="Limpar" icon={FaDeleteLeft} />
        </Stack>
      </Box>
    </Box>
  );
};
