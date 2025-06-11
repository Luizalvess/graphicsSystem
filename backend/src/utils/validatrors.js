// src/utils/validators.js

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

module.exports = {
  isCpfValid: (cpf) => {
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
  },

  // Adicione outras funções de validação aqui, como isRgValid, isEmailValid, etc.
};
