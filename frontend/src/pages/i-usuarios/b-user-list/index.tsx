import { ButtonIcon, CustomSelect, SearchBox } from "../../../Components";
import { Box, FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import { getUser } from "../../../shared";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  maskCPF,
  maskMobile,
  maskPhone,
  maskRG,
} from "../../../shared/utils/mask";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export interface User {
  _id: string;
  id?: string;
  userType: string;
  accessLevel: number;
  role: string;
  name: string;
  cpf: string;
  rg: string;
  email: string;
  phone: string;
  mobile: string;
  login: string;

  creationDate: string;
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUser();
        if (!data) {
          throw new Error("Dados não recebidos do servidor");
        }
        // Add console.log to check the data
        console.log("Received users:", data);

        const formattedData = data.map((user: User) => ({
          ...user,
          id: user._id,
          // Ensure CPF is included
          cpf: user.cpf || "",
        }));
        setUsers(formattedData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Erro detalhado: ${error.message}`);
        }
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUser();
        if (!data) {
          throw new Error("Dados não recebidos do servidor");
        }
        // Add console.log to check the data
        console.log("Received users:", data);

        const formattedData = data.map((user: User) => ({
          ...user,
          id: user._id,
          // Ensure CPF is included
          cpf: user.cpf || "",
        }));
        setUsers(formattedData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Erro detalhado: ${error.message}`);
        }
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
    { field: "photo", headerName: "Foto", width: 60 },
    { field: "id", headerName: "I D", width: 80 },
    { field: "userType", headerName: "Tipo de Usuário", width: 100 },
    {
      field: "accessLevel",
      headerName: "Nível de Acesso",
      width: 150,
      renderCell: (params) => `Nível 0${params.row.accessLevel}`,
    },
    { field: "role", headerName: "Função", width: 150 },
    { field: "name", headerName: "Nome", width: 200 },
    {
      field: "cpf",
      headerName: "C P F",
      width: 180,
      renderCell: (params) => maskCPF(params.row.cpf),
    },
    {
      field: "rg",
      headerName: "R G",
      width: 180,
      renderCell: (params) => maskRG(params.row.rg),
    },
    {
      field: "phone",
      headerName: "Telefone",
      width: 180,
      renderCell: (params) => maskPhone(params.row.phone),
    },
    {
      field: "mobile",
      headerName: "Celular",
      width: 180,
      renderCell: (params) => maskMobile(params.row.mobile),
    },
    { field: "email", headerName: "E-mail", width: 200 },
    { field: "login", headerName: "Usuário", width: 200 },
    { field: "creationDate", headerName: "Data de Criação", width: 180 },
  ];

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
            <MenuItem value="dataCriacao">id</MenuItem>
            <MenuItem value="dataCriacao">data de criação</MenuItem>
            <MenuItem value="name">Nome</MenuItem>
            <MenuItem value="role">Cargo</MenuItem>
            <MenuItem value="userType">Tipo de Usuário</MenuItem>
            <MenuItem value="cpf">CPF </MenuItem>
            <MenuItem value="rg">RG</MenuItem>
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
          <Box sx={{ flexGrow: 1 }} padding={"0 0 0 0"}>
            <DataGrid
              rows={users}
              columns={columns}
              loading={loading}
              disableRowSelectionOnClick
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10, page: 0 },
                },
              }}
              pageSizeOptions={[10, 20, 50]} // Use pageSizeOptions em vez de rowsPerPageOptions
              sx={{
                borderRadius: "10px",
                color: "text.secondary",
                bgcolor: "primary.main",
                border: "none",
                marginTop: "7%",
                height: "90%", // Força o preenchimento da área restante
                maxHeight: "75%",
                "& .MuiDataGrid-row": { cursor: "pointer" }, // Estilo do cursor para indicar clicável
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                  bgcolor: "secondary.dark",
                }, // Linhas zebradas
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* roda-pé */}
      <Box
        sx={{
          width: "98%",
          height: "12%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "left",
          bgcolor: "primary,main",
          paddingRight: "4%",
          paddingBottom: "10px",
          marginLeft: "25px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <ButtonIcon type="button" label="editar" icon={FaEdit}></ButtonIcon>
          <ButtonIcon label="Excluir" icon={MdDeleteForever} />
        </Stack>
      </Box>
    </Box>
  );
};
