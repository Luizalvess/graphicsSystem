import axios from "axios";
import { TokenService } from "@/shared";
import { Environment } from "@/environment";

export const api = axios.create({
  baseURL: Environment.URL_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor para adicionar token
api.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Fazendo requisição para:", config.baseURL + config.url);
    console.log("Headers:", config.headers);

    return config;
  },
  (error) => {
    console.error("Erro no request interceptor:", error);
    return Promise.reject(error);
  }
);

// Response interceptor para lidar com refresh token
api.interceptors.response.use(
  (response) => {
    console.log("Resposta recebida:", response.status, response.data);
    return response;
  },
  async (error) => {
    console.error(
      "Erro na resposta:",
      error.response?.status,
      error.response?.data
    );

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = TokenService.getRefreshToken();

        if (!refreshToken) {
          console.log("Sem refresh token, redirecionando para login");
          TokenService.removeTokens();
          window.location.href = "/";
          return Promise.reject(error);
        }

        console.log("Tentando renovar token...");
        const response = await axios.post(Environment.URL_BASE_TOKEN, {
          refreshToken,
        });

        const { token, refreshToken: newRefreshToken } = response.data;

        TokenService.setToken(token);
        if (newRefreshToken) {
          TokenService.setRefreshToken(newRefreshToken);
        }

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Erro ao renovar token:", refreshError);
        TokenService.removeTokens();
        localStorage.removeItem("user");
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
