import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import {
  ButtonIcon,
  CustomTextField,
  CustomSelect,
  PhotoUpload,
} from "@/Components";
import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { createUser, UserType } from "@/shared/";
import { maskCPF, maskPhone, maskMobile, maskRG } from "@/shared/utils/mask";
import { UserRole } from "@/shared";

const initialUser = {
  id: "",
  name: "",
  email: "",
  phone: "",
  mobile: "",
  cpf: "",
  rg: "",
  login: "",
  password: "",
  confirmPassword: "",
  photo: "",
  userType: "",
  accessLevel: "",
  role: "",
};

export const AddUserForm: React.FC = () => {
  const [user, setUser] = useState(initialUser);
  const [photoPreview, setPhotoPreview] = useState(""); // Prévia da foto
  const [photoFile, setPhotoFile] = useState<File | null>(null); // Arquivo da foto
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const validateForm = () => {
    if (
      !user.userType ||
      !user.accessLevel ||
      !user.role ||
      !user.name ||
      !user.email ||
      !user.cpf ||
      !user.login ||
      !user.password
    ) {
      return "Campos obrigatórios não preenchidos";
    }
    if (user.password !== user.confirmPassword) {
      return "As senhas não coincidem";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      return "Email inválido";
    }
    return null;
  };

  // Gerar ID sequencial simples
  useEffect(() => {
    const generateId = () => {
      const timestamp = Date.now().toString().slice(-6);
      const randomNum = Math.floor(Math.random() * 100)
        .toString()
        .padStart(2, "0");
      const generatedId = (timestamp + randomNum).slice(0, 6).padStart(6, "0");

      setUser((prevUser) => ({
        ...prevUser,
        id: generatedId,
      }));
    };

    generateId();
  }, []);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    if (name === "userType") {
      let newAccessLevel = user.accessLevel;
      let newRole = user.role;

      switch (value) {
        case "Visitante":
          newAccessLevel =
            user.accessLevel && user.accessLevel <= "Nível 02"
              ? user.accessLevel
              : "Nível 01";
          newRole = "Visitante";
          break;
        case "Administrador":
          newAccessLevel = "Nível 04";
          newRole = "Admin";
          break;
        case "Usuario":
          newRole =
            user.role === "Visitante" || user.role === "Admin" ? "" : user.role;
          break;
      }

      setUser((prevUser) => ({
        ...prevUser,
        userType: value,
        accessLevel: newAccessLevel,
        role: newRole,
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  // Manipular upload de foto - CORRIGIDO
  const handlePhotoUpload = (file: File) => {
    console.log("handlePhotoUpload chamado com:", file);

    if (!file.type.startsWith("image/")) {
      setSnackbar({
        open: true,
        message: "Por favor, selecione apenas arquivos de imagem",
        severity: "error",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setSnackbar({
        open: true,
        message: "A imagem deve ter menos que 5MB",
        severity: "error",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadstart = () => setLoading(true);
    reader.onloadend = () => {
      const result = reader.result as string;
      console.log("Foto carregada com sucesso");
      setPhotoPreview(result);
      setPhotoFile(file);
      setUser((prevUser) => ({
        ...prevUser,
        photo: result,
      }));
      setLoading(false);
      setSnackbar({
        open: true,
        message: "Foto carregada com sucesso!",
        severity: "success",
      });
    };
    reader.onerror = () => {
      console.error("Erro ao carregar imagem");
      setLoading(false);
      setSnackbar({
        open: true,
        message: "Erro ao carregar a imagem",
        severity: "error",
      });
    };
    reader.readAsDataURL(file);
  };

  // Submeter formulário - CORRIGIDO COM DADOS ÚNICOS
  const handleSubmit = async () => {
    const error = validateForm();
    if (error) {
      setSnackbar({
        open: true,
        message: error,
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      // Gerar timestamp para tornar os dados únicos
      const timestamp = Date.now();

      // Preparar dados para envio com valores únicos
      const userData = {
        name: user.name,
        email: user.email,
        phone: user.phone || `(11) 0000-0000`, // Usar valor do formulário ou padrão
        mobile: user.mobile.replace(/\D/g, ""), // Remove non-digit characters
        cpf: user.cpf.replace(/\D/g, ""), // Remove máscara - apenas números
        rg: user.rg.replace(/\D/g, ""), // Remove máscara - apenas números
        login: user.login,
        password: user.password,
        confirmPassword: user.confirmPassword,
        userType: user.userType as UserType,
        accessLevel: user.accessLevel,
        role: user.role as UserRole,
        image: photoFile,
      };

      console.log("Dados formatados para envio:", {
        ...userData,
        password: "***", // Não mostrar senha no log
        confirmPassword: "***",
        cpf: userData.cpf,
        rg: userData.rg,
      });

      await createUser(userData);

      setSnackbar({
        open: true,
        message: "Usuário cadastrado com sucesso!",
        severity: "success",
      });
      handleReset();
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error);

      let errorMessage = error.message || "Erro ao cadastrar usuário";

      // Mensagens mais específicas para o usuário
      if (errorMessage.includes("já cadastrado")) {
        errorMessage =
          "Já existe um usuário com esses dados (email, login, CPF, RG, telefone ou celular). Verifique os campos e tente novamente.";
      }

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Update the handleChange function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Apply masks based on field name
    if (name === "cpf") formattedValue = maskCPF(value);
    if (name === "phone") formattedValue = maskPhone(value);
    if (name === "mobile") formattedValue = maskMobile(value);
    if (name === "rg") formattedValue = maskRG(value);

    setUser((prevUser) => ({ ...prevUser, [name]: formattedValue }));
  };

  // Limpar formulário
  const handleReset = () => {
    // Gerar novo ID ao limpar
    const timestamp = Date.now().toString().slice(-6);
    const randomNum = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const newId = (timestamp + randomNum).slice(0, 6).padStart(6, "0");

    setUser({
      ...initialUser,
      id: newId,
    });
    setPhotoPreview("");
    setPhotoFile(null);
    setSnackbar({
      open: true,
      message: "Formulário limpo com sucesso!",
      severity: "success",
    });
  };

  const getAccessLevelOptions = (userType: string) => {
    switch (userType) {
      case "Visitante":
        return ["Nível 01", "Nível 02"];
      case "Administrador":
        return ["Nível 04"];
      case "Usuario":
        return ["Nível 01", "Nível 02", "Nível 03", "Nível 04"];
      default:
        return [];
    }
  };

  const getRoleOptions = (userType: string) => {
    switch (userType) {
      case "Visitante":
        return ["Visitante"];
      case "Administrador":
        return ["Admin"];
      case "Usuario":
        return [
          "Gerente",
          "Laser",
          "Acabamento",
          "Financeiro",
          "Vendedor",
          "DiretorComercial",
          "DiretorFinanceiro",
        ];
      default:
        return [];
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
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
            width: "90%",
            position: "relative",
            bgcolor: "primary.main",
            padding: "17px 30px",
            margin: "0 15px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3">Registro de usuário</Typography>

          <Box
            sx={{
              position: "relative",
              marginTop: "15px",
              bgcolor: "primary.main",
              display: "flex",
              justifyContent: "left",
            }}
          >
            {/* foto de perfil  */}
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
                <PhotoUpload
                  photoPreview={photoPreview}
                  onPhotoUpload={handlePhotoUpload}
                />
              </Box>
            </Stack>

            {/* Formulário  */}
            <Box
              padding={"25px 0"}
              width={"77%"}
              position={"relative"}
              bgcolor={"primary.main"}
              marginLeft={"12px"}
            >
              <Box margin={"15px 0"}>
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
                    <InputLabel
                      sx={{
                        marginTop: "-14px",
                        marginLeft: "15px",
                        fontSize: "1.1rem",
                        color: "text.primary",
                      }}
                    >
                      ID
                    </InputLabel>
                    <CustomTextField
                      name="id"
                      sx={{ width: "100%" }}
                      value={user.id}
                      InputProps={{ readOnly: true }}
                    />
                  </Stack>
                  <FormControl>
                    <InputLabel
                      sx={{
                        marginTop: "-8px",
                        fontSize: "1.4rem",
                        color: "text.primary",
                      }}
                    >
                      TIPO DE USUÁRIO
                    </InputLabel>
                    <CustomSelect
                      name="userType"
                      value={user.userType}
                      onChange={handleSelectChange}
                      required
                      error={!user.userType}
                    >
                      <MenuItem value="Visitante">Visitante</MenuItem>
                      <MenuItem value="Administrador">Administrador</MenuItem>
                      <MenuItem value="Usuario">Usuário</MenuItem>
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
                      NÍVEL DE ACESSO
                    </InputLabel>
                    <CustomSelect
                      name="accessLevel"
                      value={user.accessLevel}
                      onChange={handleSelectChange}
                      disabled={
                        user.userType === "Administrador" || !user.userType
                      }
                      required
                      error={!user.accessLevel}
                    >
                      {getAccessLevelOptions(user.userType).map((level) => (
                        <MenuItem key={level} value={level}>
                          {level}
                        </MenuItem>
                      ))}
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
                      CARGO
                    </InputLabel>

                    <CustomSelect
                      name="role"
                      value={user.role}
                      onChange={handleSelectChange}
                      disabled={
                        user.userType === "Administrador" ||
                        user.userType === "Visitante" ||
                        !user.userType
                      }
                      required
                      error={!user.role}
                    >
                      {getRoleOptions(user.userType).map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </FormControl>
                </Stack>

                {/* 2ª Fileira */}
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

                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                    opacity:
                      !user.userType || !user.accessLevel || !user.role
                        ? 0.5
                        : 1,
                  }}
                >
                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    label="Nome"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    error={!user.name}
                    helperText={user.name ? "" : "Campo obrigatório"}
                    required
                    fullWidth
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    label="CPF"
                    type="text"
                    name="cpf"
                    value={user.cpf}
                    onChange={handleChange}
                    error={!user.cpf}
                    helperText={user.cpf ? "" : "Campo obrigatório"}
                    required
                    fullWidth
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    type="text"
                    label="RG"
                    name="rg"
                    value={user.rg}
                    onChange={handleChange}
                    error={!user.rg}
                    helperText={!user.rg ? "Campo obrigatório" : ""}
                    required
                    fullWidth
                  />
                </Stack>

                {/* 3ª Fileira */}
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
                  Contatos:
                </InputLabel>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                    opacity:
                      !user.userType || !user.accessLevel || !user.role
                        ? 0.5
                        : 1,
                  }}
                >
                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%", textTransform: "lowercase" }}
                    type="email"
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    error={!user.email}
                    helperText={!user.email ? "Campo obrigatório" : ""}
                    required
                    fullWidth
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    type="tel"
                    label="Telefone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    fullWidth
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    type="tel"
                    label="Celular"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                    error={!user.mobile}
                    helperText={!user.mobile ? "Campo obrigatório" : ""}
                    required
                    fullWidth
                  />
                </Stack>

                {/* 4ª Fileira */}
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
                  Informações de segurança:
                </InputLabel>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                    flexDirection: "row",
                    opacity:
                      !user.userType || !user.accessLevel || !user.role
                        ? 0.5
                        : 1,
                  }}
                >
                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    type="text"
                    label="Usuário"
                    name="login"
                    value={user.login}
                    onChange={handleChange}
                    error={!user.login}
                    helperText={!user.login ? "Campo obrigatório" : ""}
                    required
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    label="Senha"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    type="password"
                    error={!user.password}
                    helperText={!user.password ? "Campo obrigatório" : ""}
                    required
                  />

                  <CustomTextField
                    disabled={!user.userType || !user.accessLevel || !user.role}
                    sx={{ width: "32%" }}
                    label="Confirmar Senha"
                    name="confirmPassword"
                    type="password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    error={!user.confirmPassword}
                    helperText={
                      !user.confirmPassword ? "Campo obrigatório" : ""
                    }
                    required
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "98%",
          height: "12%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          bgcolor: "primary,main",
          paddingRight: "4%",
          paddingBottom: "10px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <ButtonIcon
            type="button"
            label="Cadastrar"
            icon={FaCheck}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Cadastro"}
          </ButtonIcon>
          <ButtonIcon
            label="Limpar"
            icon={FaDeleteLeft}
            onClick={handleReset}
          />
        </Stack>
      </Box>
      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
