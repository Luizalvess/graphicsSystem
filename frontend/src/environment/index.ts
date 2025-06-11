export const Environment = {
  /**
   * Define a quantidade de linhas a ser carregada por padrão nas listagens
   */
  LIMITE_DE_LINHAS: 10,
  /**
   * Placeholder exibido nas inputs
   */
  INPUT_DE_BUSCA: "Pesquisar...",
  /**
   * Texto exibido quando nenhum registro é encontrado em uma listagem
   */
  LISTAGEM_VAZIA: "Nenhum registro foi encontrado.",
  /**
   * Url base de consulta dos dados dessa aplicação
   */
  URL_BASE: "http://localhost:3000",
  /**
   * Url base de consulta dos dados do usuario
   */
  URL_BASE_USER: "http://localhost:3000/users",
  /**
   * URL base de registro de dados do usuario
   */
  URL_REGISTER: "http://localhost:3000/auth/register/user",
  /**
   * URL de login
   */
  URL_LOGIN: "http://localhost:3000/auth/login",
  /**
   * Controla as permissões de usuario
   */
  URL_BASE_PERMISSION: "http://localhost:3000/auth/permissions",
  /**
   * Buscar usuário pelo token / refresh token
   */
  URL_BASE_TOKEN: "http://localhost:3000/auth/refresh-token",
  /**
   * JSON Server URL (para desenvolvimento)
   */
  JSON_SERVER_URL: "http://localhost:3001",
  /**
   * API Key do OpenWeatherMap
   */
  API_KEY: "183238fe977a1a9406c3a5a009fcb759",
  /**
   * Coordenadas padrão (Rio de Janeiro)
   */
  DEFAULT_LOCATION: {
    lat: -22.9068,
    lon: -43.1729,
    name: "Rio de Janeiro",
  },
};
