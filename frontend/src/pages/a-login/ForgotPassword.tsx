import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaLock } from "react-icons/fa";
import { ButtonBlack } from "@/Components";
import { isEmailValid } from "@/shared/utils/validators";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendEmail = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Por favor, insira um e-mail.");
      return;
    }

    if (!isEmailValid(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setIsLoading(true);

    try {
      // Aqui você pode integrar com sua API para envio de e-mail
      // Por enquanto, vamos simular o envio
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage(
        "Um e-mail de recuperação foi enviado para o endereço informado."
      );

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError("Erro ao enviar o e-mail. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendEmail();
    }
  };

  return (
    <Box
      sx={{
        padding: "8px",
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "primary.main",
        textShadow: "1",
        position: "relative",
      }}
    >
      <ButtonBlack
        to="/"
        icon={FaArrowCircleLeft}
        sx={{
          position: "absolute",
          top: "15px",
          left: "15px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
        }}
      >
        <FaLock fontSize={"100px"} style={{ marginBottom: "20px" }} />

        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Recuperar Senha
        </Typography>

        <Typography
          variant="h6"
          sx={{
            padding: "15px",
            textAlign: "center",
            lineHeight: "30px",
            textTransform: "none",
            marginBottom: "30px",
          }}
        >
          Para redefinir sua senha, informe um e-mail cadastrado na plataforma e
          lhe enviaremos um link para redefinir sua senha.
        </Typography>

        <TextField
          label="Insira seu e-mail"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          sx={{
            marginBottom: "20px",
            width: "100%",
            maxWidth: "400px",
          }}
          error={!!error}
          helperText={error}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSendEmail}
          disabled={isLoading}
          sx={{
            width: "200px",
            height: "45px",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress size={20} sx={{ marginRight: 1 }} />
              Enviando...
            </>
          ) : (
            "Enviar"
          )}
        </Button>

        {message && (
          <Alert
            severity="success"
            sx={{
              width: "100%",
              maxWidth: "400px",
              marginTop: "10px",
            }}
          >
            {message}
          </Alert>
        )}

        {error && !message && (
          <Alert
            severity="error"
            sx={{
              width: "100%",
              maxWidth: "400px",
              marginTop: "10px",
            }}
          >
            {error}
          </Alert>
        )}
      </Box>
    </Box>
  );
};
