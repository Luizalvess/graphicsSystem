// src/utils/validators.js

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

module.exports = {
  isCpfValid: (cpf) => {
    console.log("=== VALIDANDO CPF ===");
    console.log("CPF recebido:", cpf);

    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");
    console.log("CPF limpo:", cpf);

    // Validação básica de tamanho
    if (cpf.length !== 11) {
      console.log("CPF inválido: tamanho incorreto");
      return false;
    }

    // Validação de dígitos repetidos
    if (/^(\d)\1{10}$/.test(cpf)) {
      console.log("CPF inválido: dígitos repetidos");
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
      console.log("CPF inválido: primeiro dígito verificador");
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
      console.log("CPF inválido: segundo dígito verificador");
      return false;
    }

    console.log("CPF válido!");
    return true;
  },
};
