import { AuthAction, AuthState, TokenService, User } from "@/shared";
import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: true,
};

// Redutor para atualizar o estado de autenticação
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload || null,
        token: action.payload?.token || null,
        refreshToken: action.payload?.refreshToken || null,
        isAuthenticated: true,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload || null,
        loading: false,
      };
    default:
      return state;
  }
};

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (user: User, token: string, refreshToken?: string) => void;
  logout: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Função para fazer login
  const login = (user: User, token: string, refreshToken?: string) => {
    TokenService.setToken(token);
    if (refreshToken) {
      TokenService.setRefreshToken(refreshToken);
    }
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: "LOGIN",
      payload: { ...user, token, refreshToken },
    });
  };

  // Função para fazer logout
  const logout = () => {
    TokenService.removeTokens();
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    // Recuperar os dados de autenticação do localStorage ao inicializar
    const user = localStorage.getItem("user");
    const token = TokenService.getToken();
    const refreshToken = TokenService.getRefreshToken();

    if (user && token) {
      try {
        const parsedUser = JSON.parse(user);
        dispatch({
          type: "LOGIN",
          payload: { ...parsedUser, token, refreshToken },
        });
      } catch (error) {
        console.error("Erro ao parsear dados do usuário:", error);
        logout();
      }
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const contextValue: AuthContextType = {
    state,
    dispatch,
    login,
    logout,
    user: state.user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};
