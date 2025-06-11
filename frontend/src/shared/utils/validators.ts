// Função para validar o CPF
export const isCpfValid = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Validação básica de tamanho
  if (cpf.length !== 11) {
    return false;
  }

  // Validação de dígitos repetidos
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Cálculo do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Cálculo do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
};

// Função para validar um email
export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Função para validar o RG
export const isRgValid = (rg: string): boolean => {
  // Remove caracteres não numéricos
  rg = rg.replace(/\D/g, "");

  // RG deve ter entre 7 e 9 dígitos
  return rg.length >= 7 && rg.length <= 9;
};

// Função para validar telefone brasileiro
export const isPhoneValid = (phone: string): boolean => {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, "");

  // Telefone deve ter 10 ou 11 dígitos (com DDD)
  // 10 dígitos: (XX) XXXX-XXXX (fixo)
  // 11 dígitos: (XX) 9XXXX-XXXX (celular)
  return cleanPhone.length === 10 || cleanPhone.length === 11;
};

// Função para validar senha
export const isPasswordValid = (password: string): boolean => {
  return password.length >= 6;
};

// Função para validar se as senhas coincidem
export const doPasswordsMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

// Função para validar login/username
export const isLoginValid = (login: string): boolean => {
  // Login deve ter pelo menos 3 caracteres e não conter espaços
  return login.length >= 3 && !/\s/.test(login);
};

// Função para validar nome
export const isNameValid = (name: string): boolean => {
  return name.trim().length >= 2;
};

// Função para formatar CPF
export const formatCpf = (cpf: string): string => {
  const cleanCpf = cpf.replace(/\D/g, "");
  if (cleanCpf.length === 11) {
    return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return cpf;
};

// Função para formatar telefone
export const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  return phone;
};

// Função para formatar RG
export const formatRg = (rg: string): string => {
  const cleanRg = rg.replace(/\D/g, "");

  if (cleanRg.length === 9) {
    return cleanRg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  }

  return rg;
};

// Função para limpar formatação de CPF
export const cleanCpf = (cpf: string): string => {
  return cpf.replace(/\D/g, "");
};

// Função para limpar formatação de telefone
export const cleanPhone = (phone: string): string => {
  return phone.replace(/\D/g, "");
};

// Função para limpar formatação de RG
export const cleanRg = (rg: string): string => {
  return rg.replace(/\D/g, "");
};
