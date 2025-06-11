import axios from "axios";
import { Environment } from "@/environment";
import { RegisterUserData } from "@/shared";

// Função para registrar um novo usuário
export const registerUser = async (userData: FormData) => {
  try {
    console.log("=== ENVIANDO REQUISIÇÃO ===");
    console.log("URL:", Environment.URL_REGISTER);

    const response = await axios.post(Environment.URL_REGISTER, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 15000, // 15 segundos
    });

    console.log("✅ Usuário cadastrado com sucesso:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Erro no cadastro:",
      error.response?.data || error.message
    );

    if (error.response?.status === 422) {
      // Erro de validação - pegar a mensagem específica do backend
      const message = error.response.data?.message || "Dados inválidos";
      throw new Error(message);
    }

    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout: Servidor demorou para responder");
    }

    throw new Error(error.response?.data?.message || "Erro no servidor");
  }
};

export const createUser = async (userData: RegisterUserData) => {
  try {
    console.log("=== CRIANDO USUÁRIO ===");
    const formData = new FormData();

    // Adicionar campos obrigatórios
    const fields = {
      name: userData.name,
      email: userData.email,
      role: userData.role,
      cpf: userData.cpf,
      rg: userData.rg,
      phone: userData.phone,
      mobile: userData.mobile,
      userType: userData.userType,
      accessLevel: userData.accessLevel,
      login: userData.login,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    };

    Object.entries(fields).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value.toString());
      }
    });

    // Adicionar imagem se existir
    if (userData.image && userData.image instanceof File) {
      formData.append("image", userData.image);
    }

    return await registerUser(formData);
  } catch (error) {
    console.error("Erro em createUser:", error);
    throw error;
  }
};

// Outras funções permanecem iguais...
export const getUser = async () => {
  try {
    const response = await axios.get(Environment.URL_BASE_USER, {
      timeout: 10000,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${
          error.response.data.message || "Falha na requisição"
        }`
      );
    }
    throw new Error("Erro de conexão com o servidor");
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${Environment.URL_BASE_USER}/${id}`, {
      timeout: 10000,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${
          error.response.data.message || "Usuário não encontrado"
        }`
      );
    }
    throw new Error("Erro de conexão com o servidor");
  }
};
