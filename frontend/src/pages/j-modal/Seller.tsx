import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import { FaUserTie } from "react-icons/fa";
import { ModalContainer } from "../../Components";
import { useState } from "react";

export const Seller = () => {
  const [seller, setSeller] = useState({
    name: "",
    email: "",
    phone: "",
    commission: "",
    department: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSeller((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do vendedor:", seller);
    // Aqui você implementaria a lógica para salvar os dados
  };

  return (
    <ModalContainer
      modalType="seller"
      width="700px"
      height="600px"
      minimizedIcon={<FaUserTie />}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        p={3}
        sx={{ color: "text.primary", overflowY: "auto" }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Gerenciamento de Vendedor
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 100, height: 100, mb: 2, bgcolor: "primary.main" }}
              >
                <FaUserTie size={50} />
              </Avatar>
              <Button variant="outlined" size="small">
                Alterar Foto
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nome Completo"
                    name="name"
                    value={seller.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={seller.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    name="phone"
                    value={seller.phone}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Comissão (%)"
                    name="commission"
                    type="number"
                    value={seller.commission}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Departamento"
                    name="department"
                    value={seller.department}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="flex-end"
                  gap={2}
                  mt={2}
                >
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </ModalContainer>
  );
};
