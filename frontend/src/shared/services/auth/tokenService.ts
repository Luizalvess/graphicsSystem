export const TOKEN_KEY = "@App:token";
export const REFRESH_TOKEN_KEY = "@App:refreshToken";

export const TokenService = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  setRefreshToken: (refreshToken: string) =>
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken),
  removeTokens: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
