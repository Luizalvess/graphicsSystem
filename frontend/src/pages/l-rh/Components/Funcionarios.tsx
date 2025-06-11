import {
  ButtonIcon,
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
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FaCheck, FaDeleteLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { LayoutRH } from "../../../shared";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

interface Row {
  id: number;
  fullName: string;
  dependentBirth: string;
  kinship: string;
}

const columns: GridColDef[] = [
  {
    field: "index",
    headerName: "Nº",
    width: 50,
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      const paginationModel = params.api.state.pagination.paginationModel;
      const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.id);
      return paginationModel.page * paginationModel.pageSize + rowIndex + 1;
    },
  },
  { field: "id", headerName: "ID", width: 90 },
  { field: "fullName", headerName: "NOME COMPLETO", width: 250 },
  { field: "dependentBirth", headerName: "NASCIMENTO", width: 180 },
  { field: "kinship", headerName: "PARENTESCO", width: 140 },
];

const rows: Row[] = [
  {
    id: 145,
    fullName: "Douglas Luiz",
    dependentBirth: "24/12/2023",
    kinship: "esposo(A)",
  },
];

export const CadFuncionarios: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  // Função para lidar com o clique em uma linha
  const handleRowClick = (params: any) => {
    alert(`Linha clicada: ID ${params.id}`);
  };

  return (
    <LayoutRH>
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
            <Typography variant="h3">Registro de usuário</Typography>

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
                    dados pessoais do funcionário:
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
                    <CustomTextField
                      label="id*"
                      name="id"
                      sx={{ width: "12%" }}
                    />
                    <CustomTextField
                      label="nome"
                      name="name"
                      sx={{ width: "30%" }}
                      required
                    />
                    <DateTextField
                      name="birth"
                      label="admissão"
                      type="date"
                      required
                      sx={{ width: "21%" }}
                    />
                    <CustomTextField
                      sx={{ width: "9%" }}
                      label="idade"
                      type="text"
                      name="age"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "19%" }}
                      label="birthday"
                      type="text"
                      name="age"
                      required
                      fullWidth
                    />
                  </Stack>
                  {/* 2º Fileira  */}
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
                        Sexo
                      </InputLabel>
                      <CustomSelect sx={{ width: "8vw" }} name="userType">
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Feminino</MenuItem>
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
                        Fator RH
                      </InputLabel>
                      <CustomSelect sx={{ width: "9vw" }} name="userType">
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
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
                        estado civíl
                      </InputLabel>
                      <CustomSelect sx={{ width: "12vw" }} name="userType">
                        <MenuItem value="casado">casado(a)</MenuItem>
                        <MenuItem value="solteiro">solteiro(a)</MenuItem>
                        <MenuItem value="Viuvo">Viuvo(a)</MenuItem>
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
                        naturalidade
                      </InputLabel>
                      <CustomSelect sx={{ width: "13vw" }} name="userType">
                        <MenuItem value="riodejaneiro">Rio de Janeiro</MenuItem>
                        <MenuItem value="saopaulo">São Paulo</MenuItem>
                        <MenuItem value="minagerais">Minas Gerais</MenuItem>
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
                        UF
                      </InputLabel>
                      <CustomSelect sx={{ width: "6VW" }}>
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="SP">SP</MenuItem>
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
                        escolaridade
                      </InputLabel>
                      <CustomSelect sx={{ width: "17VW" }}>
                        <MenuItem>1º grau incompleto </MenuItem>
                        <MenuItem>1º grau completo </MenuItem>
                        <MenuItem>2º grau incompleto </MenuItem>
                        <MenuItem>2º grau completo </MenuItem>
                        <MenuItem>ensino superior incompleto </MenuItem>
                        <MenuItem>ensino superior completo </MenuItem>
                        <MenuItem>pós-graduação</MenuItem>
                        <MenuItem>mestrado</MenuItem>
                        <MenuItem>doutorado</MenuItem>
                      </CustomSelect>
                    </FormControl>
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
                      sx={{ width: "22%" }}
                      label="Nome do pai"
                      type="text"
                      name="fatherName"
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "22%" }}
                      label="nome da mãe"
                      type="text"
                      name="motherName"
                      fullWidth
                    />

                    <CustomTextField
                      sx={{ width: "17%" }}
                      label="CEP"
                      type="text"
                      name="cep"
                      required
                      fullWidth
                    />

                    <CustomTextField
                      sx={{ width: "22%" }}
                      label="endereço"
                      type="text"
                      name="address"
                      required
                      fullWidth
                    />

                    <CustomTextField
                      sx={{ width: "10%" }}
                      type="text"
                      label="Nº"
                      name="complement"
                      required
                      fullWidth
                    />
                  </Stack>
                  {/* 4ª Fileira */}
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
                      sx={{ width: "18%" }}
                      label="complemento"
                      type="text"
                      name="complement"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "25%" }}
                      label="Bairro"
                      type="text"
                      name="neighborhood"
                      required
                      fullWidth
                    />

                    <CustomTextField
                      sx={{ width: "22%" }}
                      label="cidade"
                      type="text"
                      name="date"
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
                        <MenuItem value="Usuário">RJ</MenuItem>
                        <MenuItem value="Visitante">SP</MenuItem>
                      </CustomSelect>
                    </FormControl>

                    <CustomTextField
                      sx={{ width: "20%" }}
                      type="tel"
                      name="phone"
                      label="telefone"
                      required
                      fullWidth
                    />
                  </Stack>
                  {/* 5ª Fileira */}
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
                      sx={{ width: "20%" }}
                      label="celular"
                      type="tel"
                      name="cellPhone"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "20%" }}
                      label="whatsapp"
                      type="tel"
                      name="whatsapp"
                      required
                      fullWidth
                    />

                    <CustomTextField
                      sx={{ width: "20%" }}
                      label="e-mail"
                      type="email"
                      name="email"
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
                        1º Emprego
                      </InputLabel>
                      <CustomSelect sx={{ width: "10vw" }}>
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
                        cont. sindical?
                      </InputLabel>
                      <CustomSelect sx={{ width: "13vw" }}>
                        <MenuItem value="Usuário">sim</MenuItem>
                        <MenuItem value="Visitante">não</MenuItem>
                      </CustomSelect>
                    </FormControl>
                  </Stack>

                  {/* 6ª Fileira */}
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
                        empresa
                      </InputLabel>
                      <CustomSelect sx={{ width: "20vw" }}>
                        <MenuItem value="Usuário">minha impresa </MenuItem>
                        <MenuItem value="Visitante">
                          minha empresa de teste
                        </MenuItem>
                      </CustomSelect>
                    </FormControl>
                    <CustomTextField
                      sx={{ width: "21%", margin: "0 15px" }}
                      label="CNPJ"
                      type="text"
                      name="cnpj"
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
                    documentação:
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
                    <CustomTextField
                      sx={{ width: "17%" }}
                      type="text"
                      label="PIs/ Pasep"
                      name="pisPasep"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "10%" }}
                      type="text"
                      label="ctps"
                      name="ctps"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "10%" }}
                      type="text"
                      label="série"
                      name="series"
                      required
                      fullWidth
                    />
                    <DateTextField
                      label="admissão"
                      type="date"
                      name="emissãocpf"
                      required
                    />

                    <CustomTextField
                      sx={{ width: "17%" }}
                      type="text"
                      label="cpf  "
                      name="cpf"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "14%" }}
                      type="text"
                      label="rg  "
                      name="rg"
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
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="SP">SP</MenuItem>
                      </CustomSelect>
                    </FormControl>
                  </Stack>

                  {/* 8ª Fileira */}
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "25px",
                      flexDirection: "row",
                    }}
                  >
                    <DateTextField
                      label="admissão"
                      type="date"
                      name="emissionRG"
                      required
                    />

                    <CustomTextField
                      sx={{ width: "17%" }}
                      type="text"
                      label="título de eleitor  "
                      name="tituloEleitor"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "10%" }}
                      type="text"
                      label="seção  "
                      name="section"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "9%" }}
                      type="text"
                      label="zona  "
                      name="zone"
                      required
                      fullWidth
                    />
                    <DateTextField
                      label="admissão"
                      type="date"
                      name="emissionTitulo"
                      required
                    />

                    <CustomTextField
                      sx={{ width: "15%" }}
                      type="text"
                      name="cnh"
                      label="CNH"
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
                        cat.
                      </InputLabel>
                      <CustomSelect sx={{ width: "6VW" }}>
                        <MenuItem value="ACC">ACC</MenuItem>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                        <MenuItem value="D">D</MenuItem>
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
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomTextField
                      sx={{ width: "17%" }}
                      type="date"
                      name="maturity"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "18%" }}
                      type="text"
                      label="reservista"
                      name="reservist"
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
                        banco
                      </InputLabel>
                      <CustomSelect sx={{ width: "16VW" }}>
                        <MenuItem value="bb">Banco do Brasil</MenuItem>
                        <MenuItem value="santander">
                          Banco Santander Brasil
                        </MenuItem>
                        <MenuItem value="caixaeconomica">
                          Caixa Econômica Federal
                        </MenuItem>
                        <MenuItem value="bradesco">Banco Bradesco</MenuItem>
                        <MenuItem value="itau">Banco Itaú Unibanco</MenuItem>
                        <MenuItem value="mercantil">
                          Banco Mercantil do Brasil
                        </MenuItem>
                        <MenuItem value="safra">Banco Safra</MenuItem>
                        <MenuItem value="pactual">BTG Pactual</MenuItem>
                        <MenuItem value="sicred">Sicredi</MenuItem>
                        <MenuItem value="sicoob">Sicoob </MenuItem>
                        <MenuItem value="Visitante">Nubank </MenuItem>
                        <MenuItem value="c6bank">C6 Bank </MenuItem>
                        <MenuItem value="pam">Banco Panamericano </MenuItem>
                      </CustomSelect>
                    </FormControl>
                    <CustomTextField
                      sx={{ width: "12%" }}
                      type="text"
                      label="agência"
                      name="emissionRg"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      sx={{ width: "12%" }}
                      type="text"
                      label="conta"
                      name="emissionRg"
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
                        conta
                      </InputLabel>
                      <CustomSelect sx={{ width: "8VW" }}>
                        <MenuItem value="Usuário">salário</MenuItem>
                        <MenuItem value="Visitante">corrent</MenuItem>
                        <MenuItem value="Visitante">poupança</MenuItem>
                      </CustomSelect>
                    </FormControl>
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
                    dados do contrato:
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
                    <DateTextField
                      label="admissão"
                      name="admission"
                      type="date"
                      required
                    />
                    <DateTextField
                      label="demissão"
                      name="resignation"
                      type="date"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "10%" }}
                      type="text"
                      label="meses"
                      name="moth"
                      required
                      fullWidth
                    />
                    <CustomTextField
                      label="salário"
                      name="wage"
                      sx={{ width: "13%" }}
                      required
                    />
                    <FormControl>
                      <InputLabel
                        sx={{
                          marginTop: "-8px",
                          fontSize: "1.4rem",
                          color: "text.primary",
                        }}
                      >
                        CARGO
                      </InputLabel>
                      <CustomSelect sx={{ width: "10vw" }} name="role">
                        <MenuItem value="Acabamentista">acabamento</MenuItem>
                        <MenuItem value="Gerente">Gerente</MenuItem>
                        <MenuItem value="Laser">Laser</MenuItem>
                        <MenuItem value="Vendedor">Vendedor</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Diretor">Diretor</MenuItem>
                        <MenuItem value="Financeiro">Financeiro</MenuItem>
                      </CustomSelect>
                    </FormControl>
                    <FormControl>
                      <InputLabel
                        sx={{
                          marginTop: "-8px",
                          fontSize: "1.4rem",
                          color: "text.primary",
                        }}
                      >
                        HORÁRIO
                      </InputLabel>
                      <CustomSelect sx={{ width: "15vw" }}>
                        <MenuItem value="segundohorario">
                          seg/sex 07:00 às 17:00
                        </MenuItem>
                        <MenuItem value="terceirohorrio">
                          seg/sex 08:00 às 18:00
                        </MenuItem>
                        <MenuItem value="quartohorario">
                          seg/sex 11:00 às 21:00{" "}
                        </MenuItem>
                        <MenuItem value="quintohorario">
                          seg/sex 12:00 às 22:00
                        </MenuItem>
                        <MenuItem value="horarionoturno">
                          seg/sex 22:00 às 6:00
                        </MenuItem>
                        <MenuItem value="primeirohorario">
                          seg/sex 06:00 às 14:00
                        </MenuItem>
                        <MenuItem value="estagiohorariomanha">
                          seg/sex 09:00 às 13:00
                        </MenuItem>
                        <MenuItem value="estagiohoraritarde">
                          seg/sex 12:00 às 16:00
                        </MenuItem>
                      </CustomSelect>
                    </FormControl>
                  </Stack>

                  {/* 11ª Fileira */}
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
                      sx={{ width: "12%" }}
                      type="text"
                      label="tickt"
                      name="tickt"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "13%" }}
                      type="text"
                      label="valor dia"
                      name="dailyvalue"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "18%" }}
                      type="text"
                      label="v. transporte"
                      name="transportationvoucher"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "13%" }}
                      type="text"
                      label="valor dia"
                      name="dailytransport"
                      required
                    />
                    <CustomTextField
                      sx={{ width: "18%" }}
                      type="text"
                      label="Experiência"
                      name="Experience"
                      required
                    />
                    <Box height={"35px"} width={"20%"}>
                      <InputLabel
                        sx={{
                          marginTop: "-8px",
                          fontSize: "1.1rem",
                          color: "text.primary",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          fontWeight: "100",
                        }}
                      >
                        Descontos
                      </InputLabel>
                      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                        <FormControlLabel
                          control={<CheckboxCustom />}
                          label="VT"
                        />
                        <FormControlLabel
                          required
                          control={<CheckboxCustom />}
                          label="VR"
                        />
                        <FormControlLabel
                          disabled
                          control={<CheckboxCustom />}
                          label="P. Saúde"
                        />
                      </FormGroup>
                    </Box>
                  </Stack>

                  {/* 12ª Fileira */}
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "30px",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomTextBox
                      fullWidth
                      label="observações"
                      multiline
                      maxRows={5}
                    />
                  </Stack>

                  {/* 13ª Fileira */}
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-50px",
                      flexDirection: "row",
                    }}
                  >
                    <Box
                      marginTop={"65px"}
                      width={"78%"}
                      height={"auto"}
                      sx={{ height: "50%" }}
                    >
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
                        dados dos dependentes:
                      </InputLabel>
                      {/* 13º Fileira  */}
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
                          label="id*"
                          name="id"
                          sx={{ width: "14%" }}
                        />

                        <CustomTextField
                          label="nome completo"
                          name="fullName"
                          sx={{ width: "38%" }}
                          required
                        />
                        <DateTextField
                          name="dependentBirth"
                          label="nascimento"
                          type="date"
                          required
                          sx={{ width: "24%" }}
                        />
                        <FormControl>
                          <InputLabel
                            sx={{
                              marginTop: "-8px",
                              fontSize: "1.4rem",
                              color: "text.primary",
                            }}
                          >
                            PARENTESCO
                          </InputLabel>
                          <CustomSelect sx={{ width: "10vw" }} name="kinship">
                            <MenuItem value="Acabamentista">Filhos</MenuItem>
                            <MenuItem value="Laser">Esposo(a)</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Stack>

                      <Box marginTop={"-5%"} sx={{ flexGrow: 1 }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          paginationModel={paginationModel}
                          onPaginationModelChange={setPaginationModel}
                          pageSizeOptions={[3, 6, 9]}
                          autoHeight={false}
                          onRowClick={handleRowClick} // Linhas clicáveis
                          sx={{
                            borderRadius: "10px",
                            color: "text.secondary",
                            bgcolor: "primary.main",
                            border: "none",
                            marginTop: "7%",
                            height: "250px", // Força o preenchimento da área restante
                            maxHeight: "400px",
                            "& .MuiDataGrid-row": { cursor: "pointer" }, // Estilo do cursor para indicar clicável
                            "& .MuiDataGrid-row:nth-of-type(odd)": {
                              bgcolor: "secondary.dark",
                            }, // Linhas zebradas
                          }}
                        />
                      </Box>
                    </Box>
                    <Box width={"22%"} height={"auto"} sx={{ height: "50%" }}>
                      <Stack
                        spacing={3}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          height: "200px",
                        }}
                      >
                        <ButtonIcon
                          type="button"
                          label="salvar"
                          icon={FaCheck}
                        />
                        <ButtonIcon label="Limpar" icon={FaDeleteLeft} />
                        <ButtonIcon
                          type="button"
                          label="editar"
                          icon={MdEdit}
                        />
                        <ButtonIcon label="excluir" icon={MdDeleteForever} />
                      </Stack>
                    </Box>
                  </Stack>

                  {/* 14ª Fileira */}
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-50px",
                      flexDirection: "row",
                    }}
                  >
                    <Box
                      marginTop={"65px"}
                      width={"78%"}
                      height={"auto"}
                      sx={{ height: "50%" }}
                    >
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
                        documentação e outros arquivos do funcionário em PDF:
                      </InputLabel>
                      {/* 13º Fileira  */}
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
                          label="id*"
                          name="id"
                          sx={{ width: "14%" }}
                        />

                        <CustomTextField
                          label="nome completo"
                          name="fullName"
                          sx={{ width: "41%" }}
                          required
                        />
                        <DateTextField
                          name="dependentBirth"
                          label="nascimento"
                          type="date"
                          required
                          sx={{ width: "41%" }}
                        />
                      </Stack>

                      <Box marginTop={"-5%"} sx={{ flexGrow: 1 }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          paginationModel={paginationModel}
                          onPaginationModelChange={setPaginationModel}
                          pageSizeOptions={[3, 6, 9]}
                          autoHeight={false}
                          onRowClick={handleRowClick} // Linhas clicáveis
                          sx={{
                            borderRadius: "10px",
                            color: "text.secondary",
                            bgcolor: "primary.main",
                            border: "none",
                            marginTop: "7%",
                            height: "250px", // Força o preenchimento da área restante
                            maxHeight: "400px",
                            "& .MuiDataGrid-row": { cursor: "pointer" }, // Estilo do cursor para indicar clicável
                            "& .MuiDataGrid-row:nth-of-type(odd)": {
                              bgcolor: "secondary.dark",
                            }, // Linhas zebradas
                          }}
                        />
                      </Box>
                    </Box>
                    <Box width={"22%"} height={"auto"} sx={{ height: "50%" }}>
                      <Stack
                        spacing={3}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          height: "200px",
                        }}
                      >
                        <ButtonIcon
                          type="button"
                          label="salvar"
                          icon={FaCheck}
                        />
                        <ButtonIcon label="Limpar" icon={FaDeleteLeft} />
                        <ButtonIcon
                          type="button"
                          label="editar"
                          icon={MdEdit}
                        />
                        <ButtonIcon label="excluir" icon={MdDeleteForever} />
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
          <Stack
            marginRight={"-12px"}
            marginTop={"-10px"}
            direction="row"
            spacing={2}
          >
            <ButtonIcon type="button" label="Cadastrar" icon={FaCheck} />
            <ButtonIcon label="Limpar" icon={FaDeleteLeft} />
          </Stack>
        </Box>
      </Box>
    </LayoutRH>
  );
};
