export type UserType = "Administrador" | "Usuario" | "Visitante";
export type UserRole =
  | "Admin"
  | "Gerente"
  | "Laser"
  | "Acabamento"
  | "Financeiro"
  | "Vendedor(a)"
  | "Diretor(a) Comercial"
  | "Diretor(a) Financeiro"
  | "Visitante";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  phone: string;
  mobile: string;
  userType: UserType;
  role: UserRole;
  accessLevel: number;
  image: string;
  login: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserCredentials {
  login: string;
  password: string;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  mobile?: string;
  userType?: UserType;
  role?: UserRole;
  accessLevel?: number;
  image?: string;
  login?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Interface para o estado de autenticação
export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken?: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const AUTH_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOADING: "LOADING",
  SET_USER: "SET_USER",
} as const;

export type AuthActionType = (typeof AUTH_ACTIONS)[keyof typeof AUTH_ACTIONS];

export interface AuthAction {
  type: AuthActionType;
  payload?: User & { token?: string; refreshToken?: string };
}

// Interface para resposta de login
export interface LoginResponse {
  message: string;
  user: User;
  token: string;
  refreshToken?: string;
}

// Interface para dados de registro
export interface RegisterUserData {
  name: string;
  email: string;
  role: UserRole;
  cpf: string;
  rg: string;
  phone: string;
  mobile: string;
  userType: UserType;
  accessLevel: string;
  login: string;
  password: string;
  confirmPassword: string;
  image?: File;
}
