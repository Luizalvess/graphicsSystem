import { AuthAction, User } from "@/shared";

// Ação para definir o usuário autenticado
export const login = (
  user: User,
  token: string,
  refreshToken?: string
): AuthAction => ({
  type: "LOGIN",
  payload: { ...user, token, refreshToken },
});

// Ação para fazer logout
export const logout = (): AuthAction => ({
  type: "LOGOUT",
});

// Ação para indicar que o estado de autenticação está carregando
export const setLoading = (): AuthAction => ({
  type: "LOADING",
});

// Ação para definir usuário sem login
export const setUser = (user: User): AuthAction => ({
  type: "SET_USER",
  payload: user,
});
