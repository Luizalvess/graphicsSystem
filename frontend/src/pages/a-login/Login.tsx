import React, { useState, useRef, useEffect } from "react";
import { Box, Link, Stack, Typography, CircularProgress } from "@mui/material";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
  ButtonWhite,
  Password,
  LoginButton,
  CustomTextField,
  HeaderTwoButtons,
} from "@/Components";
import { useAuthHook } from "@/shared";

export const Login: React.FC = () => {
  const { loginUser, loading } = useAuthHook();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  const handleLogin = async () => {
    if (!login || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await loginUser({ login, password });
      console.log("Login realizado com sucesso!");
    } catch (err: any) {
      console.error("Erro no login:", err);
      setError(err.message || "Usuário ou senha inválidos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      loginButtonRef.current?.focus();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  const handleLoginKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  const handleLoginButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  useEffect(() => {
    const button = loginButtonRef.current;
    if (button) {
      button.addEventListener(
        "keydown",
        handleLoginButtonKeyDown as unknown as EventListener
      );
      return () => {
        button.removeEventListener(
          "keydown",
          handleLoginButtonKeyDown as unknown as EventListener
        );
      };
    }
  }, [login, password]);

  // Se está carregando a autenticação inicial
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.default",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "10px",
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "primary.main",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            top: "8px",
            width: "100%",
            height: "6%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            WebkitAppRegion: "drag",
            position: "absolute",
          }}
          onDoubleClick={handleDoubleClick}
        >
          <HeaderTwoButtons />
        </Box>

        {/* Body */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left Side - Welcome */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "50px",
                transition: "1.25s",
                overflow: "hidden",
                bgcolor: "primary.main",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "500px",
                  height: "500px",
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  boxShadow: "4",
                  bottom: "-40%",
                  left: "-20%",
                  transition: "1.25s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  boxShadow: "4",
                  top: "-20%",
                  borderRadius: "50%",
                  left: "23%",
                  width: "300px",
                  bgcolor: "primary.main",
                  height: "300px",
                }}
              />
              <Box
                sx={{
                  marginTop: "-5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "absolute",
                  width: "450px",
                  padding: "50px 55px",
                  transition: "1.25s",
                  marginLeft: "29%",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "text.secondary", marginBottom: "15px" }}
                >
                  Bem Vindo!
                </Typography>
                <Typography
                  variant="h5"
                  align="left"
                  gutterBottom
                  sx={{
                    color: "text.primary",
                    wordSpacing: "2px",
                    letterSpacing: "1px",
                    lineHeight: "2.5rem",
                    marginLeft: "15px",
                    textTransform: "none",
                  }}
                >
                  Para se manter conectado conosco, faça login com suas
                  informações pessoais!
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Login Form */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "850px",
                height: "100%",
                transition: "1.25s",
                overflow: "hidden",
                zIndex: "900",
                bgcolor: "primary.main",
                borderLeft: " 2px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "75%",
                  width: "55%",
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    color: "text.secondary",
                    wordSpacing: "2px",
                    letterSpacing: "1px",
                    textTransform: "none",
                  }}
                >
                  Entre na sua conta
                </Typography>

                <Stack
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <ButtonWhite to="" icon={FaFacebook} />
                  <ButtonWhite to="" icon={BsTwitterX} />
                  <ButtonWhite to="" icon={FaGoogle} />
                </Stack>

                <Typography
                  variant="h5"
                  sx={{
                    color: "text.primary",
                    wordSpacing: "3px",
                    letterSpacing: "2px",
                    textTransform: "none",
                    margin: "-10px 0 -10px 0px",
                  }}
                >
                  Use usuário ou e-mail para entrar
                </Typography>

                <CustomTextField
                  sx={{ width: "330px" }}
                  name="login"
                  label="Login ou Email"
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  onKeyDown={handleLoginKeyDown}
                  disabled={isLoading}
                />

                <Password
                  name="password"
                  label="Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handlePasswordKeyDown}
                  disabled={isLoading}
                />

                {error && (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{
                      fontSize: "12px",
                      textAlign: "center",
                      marginTop: "-10px",
                      backgroundColor: "rgba(255, 0, 0, 0.1)",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      border: "1px solid rgba(255, 0, 0, 0.3)",
                    }}
                  >
                    {error}
                  </Typography>
                )}

                <Stack
                  color={"text.secondary"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  sx={{
                    marginTop: error ? "-10px" : "-75px",
                    width: "300px",
                  }}
                >
                  <Link
                    href="/esqueci-minha-senha"
                    sx={{
                      color: "text.secondary",
                      cursor: "pointer",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      "&.active": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    {"Esqueceu sua senha?"}
                  </Link>
                  <Typography variant="body2">Lembrar-me</Typography>
                </Stack>

                <LoginButton
                  label={isLoading ? "Entrando..." : "entrar"}
                  onClick={handleLogin}
                  ref={loginButtonRef}
                  disabled={isLoading}
                />

                {isLoading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  />
                )}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
