import { useAuth as useAuthContext, UserRole } from "@/shared";

// Hook customizado para facilitar o uso do estado de autenticação
export const useAuth = () => {
  const { state, login, logout } = useAuthContext();

  const loginUser = (userData: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    token: string;
    refreshToken?: string;
    accessLevel?: number;
  }) => {
    const { token, refreshToken, ...user } = userData;
    login(
      {
        ...user,
        accessLevel: user.accessLevel || 1,
      },
      token,
      refreshToken
    );
  };

  const logoutUser = () => {
    logout();
  };

  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    loginUser,
    logoutUser,
  };
};
