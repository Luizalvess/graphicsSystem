pendencias de tel de Cadastro de usuarios
[] ajustar o id do ussuario
[] ajustar a funçao de tirar a foto do ussuario
[] criar a mascara
[x] acabar de configurar os selects
[] separa por funções
[] tornar os campos obrigatorios

iniciando a tela de login
[x] ajustar cor das fontes
[x] ajustar input de senha
[x] ajustar mensageens de erro ou alertas
[x] configurar o header
[x] configura os botoes de minmizar e fechar
[x] configura o botao de recuperaçao de senha
[x] configurar o checkBox pra salvar senha
[x] separa o form das configuraçoes de login
[] configura as opçoe de logar usandorede social

frotend
src/
│
├── assets/ # Arquivos estáticos (imagens, fontes, ícones)
│ └── images/
│ └── icons/
│
├── components/ # Componentes reutilizáveis
│ ├── Button.tsx # Exemplo de componente genérico de botão
│ ├── Input.tsx # Exemplo de componente de input
│ └── Header.tsx # Cabeçalho comum
│
├── contexts/ # Contextos para gerenciar estado global
│ └── AuthContext.tsx # Contexto de autenticação
│ └── PermissionsContext.tsx # Contexto de permissões (caso necessário)
│
└── hooks/
├── useAuth.ts # Hook customizado para usar o estado de autenticação
├── useFetch.ts # Hook customizado para chamadas de API
├── useLocalStorage.ts # Hook customizado para usar o LocalStorage
└── usePermissions.ts # Hook customizado para gerenciar permissões de usuários
│
├── layouts/ # Layouts com estrutura de página comum
│ ├── MainLayout.tsx # Layout principal com cabeçalho, rodapé, etc.
│ └── AdminLayout.tsx # Layout exclusivo para admins (se necessário)
│
├── pages/ # Páginas da aplicação (cada rota tem sua própria página)
│ ├── Home.tsx # Página inicial
│ ├── Login.tsx # Página de login
│ ├── Register.tsx # Página de registro de usuário
│ └── Dashboard.tsx # Dashboard do usuário/admin
│
├── services/ # Comunicação com o backend (APIs)
│ ├── api.ts # Arquivo de configuração da API (axios, fetch, etc.)
│ ├── authService.ts # Funções específicas para autenticação (login, logout)
│ └── userService.ts # Funções específicas para usuários (registro, atualizar dados)
│
└── state/
├── AuthContext.tsx # Gerencia o estado de autenticação do usuário
├── actions.ts # Funções de ação para atualizar o estado
└── types.ts # Tipos e interfaces usados no estado

│
├── styles/ # Arquivos de estilo (CSS, SCSS, styled-components)
│ ├── global.css # Estilos globais da aplicação
│ ├── variables.scss # Variáveis globais (cores, fontes)
│ └── Button.module.scss # Exemplo de estilo para o componente Button
│
├── utils/ # Funções utilitárias
│ ├── validators.ts # Funções de validação (CPF, RG, email, etc.)
└── formatters.ts # Funções de formatação (ex: data, número)

├── App.tsx # Componente principal da aplicação
├── index.tsx # Ponto de entrada (renderização do React)
└── routes.tsx # Definição de rotas com React Router
