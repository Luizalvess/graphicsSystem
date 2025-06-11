import { Box, FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import { CustomSelect, SearchBox } from "../../../Components";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { FC, useState } from "react";

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

export const ClientList: FC = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  // Função para lidar com o clique em uma linha
  const handleRowClick = (params: any) => {
    alert(`Linha clicada: ID ${params.id}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Cabeçalho */}
      <Stack
        direction={"row"}
        spacing={2}
        width={"98%"}
        height={"70px"}
        display={"flex"}
        alignItems={"end"}
        justifyContent={"right"}
        paddingRight={"10px"}
      >
        <FormControl>
          <InputLabel
            sx={{
              marginTop: "-8px",
              fontSize: "1.4rem",
              color: "text.primary",
            }}
          >
            ordenar por:
          </InputLabel>
          <CustomSelect sx={{ width: "18vw" }}>
            <MenuItem value="dataCriacao">data de criação</MenuItem>
            <MenuItem value="razaoSocial">razão social</MenuItem>
            <MenuItem value="nomeFantazia">Nome fantazia</MenuItem>
            <MenuItem value="vendedor">Vendedor</MenuItem>
            <MenuItem value="cidade">Cidade </MenuItem>
            <MenuItem value="estado">Estado</MenuItem>
          </CustomSelect>
        </FormControl>
        <Stack width={"20%"} borderRadius={"20px"} boxShadow={4}>
          <SearchBox />
        </Stack>
      </Stack>

      {/* Corpo */}
      <Box
        width={"100%"}
        height={"84%"}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh", // Altura total da viewport
            width: "100%",
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
                marginTop: "7%",
                height: "78%", // Força o preenchimento da área restante
                maxHeight: "82%",
                "& .MuiDataGrid-row": { cursor: "pointer" }, // Estilo do cursor para indicar clicável
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                  bgcolor: "secondary.dark",
                }, // Linhas zebradas
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Roda-pé */}
      <Box
        width={"50%"}
        height={"8%"}
        sx={{
          bottom: "2%",
          left: "5%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
        }}
      ></Box>
    </Box>
  );
};
