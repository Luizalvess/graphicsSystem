import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  ButtonIcon,
  ButtonWhite,
  CustomTextBox,
  CustomTextField,
} from "../../../../Components";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
} from "@mui/material";
import { FaTruckRampBox } from "react-icons/fa6";
import { CiBarcode } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { FaPlusCircle, FaRegEdit, FaRegImages } from "react-icons/fa";
import { ButtonMedium } from "./ButtonMedium";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { IoIosPrint, IoMdSearch } from "react-icons/io";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Row {
  id: number;
  foto: string;
  razaoSocial: string;
  nomeFantasia: string;
  tipoCadastro: string;
  whatsapp: string;
  telefone: string;
  celular: string;
  email: string;
  site: string;
  apelidoFantasia: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  nomeVendedor: string;
  observacoes: string;
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
  { field: "foto", headerName: "Foto", width: 100 },
  { field: "id", headerName: "ID", width: 90 },
  { field: "razaoSocial", headerName: "Razão Social", width: 180 },
  { field: "nomeFantasia", headerName: "Nome Fantasia", width: 180 },
  { field: "tipoCadastro", headerName: "Tipo de Cadastro", width: 180 },
  { field: "whatsapp", headerName: "WhatsApp", width: 150 },
  { field: "telefone", headerName: "Telefone", width: 150 },
  { field: "celular", headerName: "Celular", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "site", headerName: "Site", width: 200 },
  { field: "apelidoFantasia", headerName: "Apelido/Fantasia", width: 180 },
  { field: "endereco", headerName: "Endereço", width: 200 },
  { field: "bairro", headerName: "Bairro", width: 150 },
  { field: "cidade", headerName: "Cidade", width: 150 },
  { field: "uf", headerName: "UF", width: 100 },
  { field: "nomeVendedor", headerName: "Nome do Vendedor", width: 180 },
  { field: "observacoes", headerName: "Observações", width: 250 },
];

const rows: Row[] = [
  {
    id: 1,
    foto: "",
    razaoSocial: "Empresa Exemplo",
    nomeFantasia: "Exemplo",
    tipoCadastro: "Tipo A",
    whatsapp: "123456789",
    telefone: "987654321",
    celular: "123123123",
    email: "exemplo@email.com",
    site: "www.exemplo.com",
    apelidoFantasia: "Exemplo",
    endereco: "Rua Exemplo, 123",
    bairro: "Centro",
    cidade: "Cidade Exemplo",
    uf: "EX",
    nomeVendedor: "Vendedor Exemplo",
    observacoes: "Nenhuma observação",
  },
];

export const TabControl: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [radioChecked, setRadioChecked] = React.useState(false);

  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      pageSize: 10,
      page: 0,
    });

  // Função para lidar com o clique em uma linha
  const handleRowClick = (params: any) => {
    alert(`Linha clicada: ID ${params.id}`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Observações Gerais do Serviço" {...a11yProps(0)} />
          <Tab label="Lista de Produtos e serviços" {...a11yProps(1)} />
          <Tab label="Imagem do Trabalho / Serviço" {...a11yProps(2)} />
          <Tab
            label="Informaçôes de Controle / Registro Diversos"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CustomTextBox
          sx={{ width: "100%", marginTop: "10px" }}
          label={"observações Gerais "}
          multiline
          rows={10}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "230px",
            width: "100%",
            gap: "10px",
          }}
        >
          <Box
            width={"17%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={"10px 5px"}
            gap={"10px"}
          >
            <ButtonMedium
              icon={FaTruckRampBox}
              label="incluir"
              sx={{
                width: "100%",
                height: "22%",
              }}
            />
            <ButtonMedium
              icon={CiBarcode}
              label="automático"
              sx={{
                width: "100%",
                height: "22%",
              }}
            />
            <ButtonMedium
              icon={FaRegEdit}
              label="alterar"
              sx={{
                width: "100%",
                height: "22%",
              }}
            />
            <ButtonMedium
              icon={MdDeleteSweep}
              label="excluir"
              sx={{
                width: "100%",
                height: "22%",
              }}
            />
          </Box>
          <Box
            width={"83%"}
            height={"100%"}
            overflow={"scroll"}
            sx={{
              scrollbarWidth: "none", // Para Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Para Chrome, Safari e outros WebKit browsers
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[10, 20, 50]}
                autoHeight={false}
                onRowClick={handleRowClick} // Linhas clicáveis
                sx={{
                  borderRadius: "10px",
                  color: "text.secondary",
                  bgcolor: "primary.main",
                  border: "none",
                  height: "100vh", // Força o preenchimento da área restante
                  "& .MuiDataGrid-row": { cursor: "pointer" }, // Estilo do cursor para indicar clicável
                  "& .MuiDataGrid-row:nth-of-type(odd)": {
                    bgcolor: "secondary.dark",
                  }, // Linhas zebradas
                }}
              />
            </Box>
          </Box>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Stack
          height={"230px"}
          width={"100%"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Stack height={"100%"} width={"25%"} padding={"5px"}>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <ButtonIcon
                icon={FaRegImages}
                label=" informação da imagem"
                sx={{ width: "100%" }}
              />
              <ButtonWhite
                icon={IoIosPrint}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
            <Paper
              sx={{
                width: "100%",
                height: "60%",
                margin: "10px 0",
              }}
            ></Paper>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <CustomTextField
                sx={{ width: "100%", borderRadius: "5px" }}
                type="text"
                name="alterado"
                required
                fullWidth
              />
              <ButtonWhite
                icon={IoMdSearch}
                sx={{
                  marginLeft: "10px",
                }}
              />
              <ButtonWhite
                icon={FaPlusCircle}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Stack>
          <Stack height={"100%"} width={"25%"} padding={"5px"}>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <ButtonIcon
                icon={FaRegImages}
                label=" informação da imagem"
                sx={{ width: "100%" }}
              />
              <ButtonWhite
                icon={IoIosPrint}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
            <Paper
              sx={{
                width: "100%",
                height: "60%",
                margin: "10px 0",
              }}
            ></Paper>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <CustomTextField
                sx={{ width: "100%", borderRadius: "5px" }}
                type="text"
                name="alterado"
                required
                fullWidth
              />
              <ButtonWhite
                icon={IoMdSearch}
                sx={{
                  marginLeft: "10px",
                }}
              />
              <ButtonWhite
                icon={FaPlusCircle}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Stack>
          <Stack height={"100%"} width={"25%"} padding={"5px"}>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <ButtonIcon
                icon={FaRegImages}
                label=" informação da imagem"
                sx={{ width: "100%" }}
              />
              <ButtonWhite
                icon={IoIosPrint}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
            <Paper
              sx={{
                width: "100%",
                height: "60%",
                margin: "10px 0",
              }}
            ></Paper>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <CustomTextField
                sx={{ width: "100%", borderRadius: "5px" }}
                type="text"
                name="alterado"
                required
                fullWidth
              />
              <ButtonWhite
                icon={IoMdSearch}
                sx={{
                  marginLeft: "10px",
                }}
              />
              <ButtonWhite
                icon={FaPlusCircle}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Stack>
          <Stack height={"100%"} width={"25%"} padding={"5px"}>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <ButtonIcon
                icon={FaRegImages}
                label=" informação da imagem"
                sx={{ width: "100%" }}
              />
              <ButtonWhite
                icon={IoIosPrint}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
            <Paper
              sx={{
                width: "100%",
                height: "60%",
                margin: "10px 0",
              }}
            ></Paper>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <CustomTextField
                sx={{ width: "100%", borderRadius: "5px" }}
                type="text"
                name="alterado"
                required
                fullWidth
              />
              <ButtonWhite
                icon={IoMdSearch}
                sx={{
                  marginLeft: "10px",
                }}
              />
              <ButtonWhite
                icon={FaPlusCircle}
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Stack
          width={"100%"}
          height={"230px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Stack
            height={"50%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box width={"49%"}>
              <FormControl>
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
                    label="serviço a ser realizado:"
                  />
                </FormGroup>
              </FormControl>
              <CustomTextBox sx={{ width: "100%" }} multiline rows={2} />
            </Box>
            <Box width={"49%"}>
              <FormControl>
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
                    label="Problamas e reparos a serem feitos no serviço:"
                  />
                </FormGroup>
              </FormControl>
              <CustomTextBox sx={{ width: "100%" }} multiline rows={2} />
            </Box>
          </Stack>

          <Stack>
            <FormControl>
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
                  label="Etapa do serviço sendo realizado:"
                />
              </FormGroup>
            </FormControl>
            <CustomTextBox sx={{ width: "100%" }} multiline rows={2} />
          </Stack>
        </Stack>
      </CustomTabPanel>
    </Box>
  );
};
