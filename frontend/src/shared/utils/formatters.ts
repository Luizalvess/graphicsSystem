// Função para formatar uma data no formato 'dd/mm/yyyy'
export const formatDate = (date: string | Date): string => {
  if (!date) return "";

  const d = new Date(date);
  if (isNaN(d.getTime())) return "";

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

// Função para formatar data e hora
export const formatDateTime = (date: string | Date): string => {
  if (!date) return "";

  const d = new Date(date);
  if (isNaN(d.getTime())) return "";

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

// Função para formatar um número para moeda (R$)
export const formatCurrency = (value: number): string => {
  if (isNaN(value)) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

// Função para formatar um telefone no padrão (XX) XXXXX-XXXX
export const formatPhone = (phone: string): string => {
  if (!phone) return "";

  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  return phone;
};

// Função para formatar CPF
export const formatCpf = (cpf: string): string => {
  if (!cpf) return "";

  const cleanCpf = cpf.replace(/\D/g, "");
  if (cleanCpf.length === 11) {
    return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return cpf;
};

// Função para formatar RG
export const formatRg = (rg: string): string => {
  if (!rg) return "";

  const cleanRg = rg.replace(/\D/g, "");

  if (cleanRg.length === 9) {
    return cleanRg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  }

  return rg;
};

// Função para formatar nome (primeira letra maiúscula)
export const formatName = (name: string): string => {
  if (!name) return "";

  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Função para truncar texto
export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Função para formatar número com separadores de milhares
export const formatNumber = (num: number): string => {
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("pt-BR").format(num);
};

// Função para formatar porcentagem
export const formatPercentage = (
  value: number,
  decimals: number = 2
): string => {
  if (isNaN(value)) return "0%";
  return `${value.toFixed(decimals)}%`;
};

// Função para capitalizar primeira letra
export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
