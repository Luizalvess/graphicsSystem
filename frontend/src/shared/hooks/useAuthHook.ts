import { useNavigate } from "react-router-dom";
import { login as authServiceLogin, useAuth } from "@/shared";

interface LoginCredentials {
  login: string;
  password: string;
}

export const useAuthHook = () => {
  const { login, logout, state } = useAuth();
  const navigate = useNavigate();

  const loginUser = async (credentials: LoginCredentials) => {
    try {
      console.log("Iniciando login para:", credentials.login);

      const response = await authServiceLogin(credentials);

      console.log("Resposta do servidor:", response);

      if (!response || !response.user || !response.token) {
        throw new Error("Resposta inválida do servidor");
      }

      const { user, token, refreshToken } = response;

      login(user, token, refreshToken);
      navigate("/dashboard");

      return response;
    } catch (error: any) {
      console.error("Authentication error:", error);

      // Mensagens mais específicas para o usuário
      let userMessage = "Erro ao fazer login";

      if (error.message.includes("timeout")) {
        userMessage = "Servidor demorou para responder. Tente novamente.";
      } else if (error.message.includes("Conexão recusada")) {
        userMessage = "Não foi possível conectar ao servidor.";
      } else if (error.message.includes("Network Error")) {
        userMessage = "Erro de rede. Verifique sua conexão.";
      } else if (error.message.includes("Usuário não encontrado")) {
        userMessage = "Usuário não encontrado.";
      } else if (error.message.includes("Senha inválida")) {
        userMessage = "Senha incorreta.";
      }

      throw new Error(userMessage);
    }
  };

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return {
    loginUser,
    logoutUser,
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
  };
};
