import axios from "axios";
import { Environment } from "../../../environment";
import { LoginResponse } from "../../../shared";

interface LoginPayload {
  login?: string;
  email?: string;
  password: string;
}

// Função para fazer login
export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  try {
    console.log("Enviando requisição de login para:", Environment.URL_LOGIN);
    console.log("Dados enviados:", { login: data.login, email: data.email });

    const response = await axios.post(Environment.URL_LOGIN, data, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });

    console.log("Resposta recebida:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Erro no authService:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    console.error("URL tentada:", Environment.URL_LOGIN);

    if (error.code === "ECONNABORTED") {
      throw new Error(
        "Timeout: Servidor demorou muito para responder. Verifique se o backend está rodando."
      );
    }

    if (error.code === "ECONNREFUSED" || error.code === "ERR_NETWORK") {
      throw new Error(
        "Conexão recusada: Servidor não está rodando na porta 3000."
      );
    }

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);

      const errorMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        `Erro ${error.response.status}`;
      throw new Error(errorMessage);
    }

    throw new Error("Erro de conexão com o servidor");
  }
};

export const logout = () => {
  localStorage.removeItem("@App:token");
  localStorage.removeItem("@App:refreshToken");
  localStorage.removeItem("user");
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("@App:token");
  const user = localStorage.getItem("user");
  return !!(token && user);
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error("Erro ao parsear dados do usuário:", error);
      return null;
    }
  }
  return null;
};
