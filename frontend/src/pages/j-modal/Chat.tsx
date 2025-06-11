import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { ModalContainer } from "../../Components/HModal/ModalContainer";
import { IoLogoWechat } from "react-icons/io5";
import { useState } from "react";
import { ButtonWhite } from "../../Components";
import { useModal } from "../../shared";

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: Date;
}

// Componente de botão para abrir o chat
export const ChatButton: React.FC = () => {
  const { handleOpen } = useModal("chat");

  return <ButtonWhite icon={IoLogoWechat} onClick={handleOpen} />;
};

// Componente do modal de chat
export const ChatModal: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Como posso ajudar você hoje?",
      sender: "system",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simula resposta do sistema após 1 segundo
    setTimeout(() => {
      const systemResponse: Message = {
        id: messages.length + 2,
        text: `Recebi sua mensagem: "${newMessage}"`,
        sender: "system",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, systemResponse]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <ModalContainer
      modalType="chat"
      title="Chat de Suporte"
      width="500px"
      height="600px"
      minimizedIcon={<IoLogoWechat />}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "16px",
        }}
      >
        <Typography variant={"h5"} sx={{ mb: 2, color: "text.primary" }}>
          Chat de Suporte
        </Typography>

        {/* Área de mensagens */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            mb: 2,
            p: 2,
            bgcolor: "background.paper",
            borderRadius: "8px",
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
                mb: 2,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="flex-start">
                {message.sender === "system" && (
                  <Avatar
                    sx={{ bgcolor: "primary.light", width: 32, height: 32 }}
                  >
                    S
                  </Avatar>
                )}
                <Box>
                  <Box
                    sx={{
                      bgcolor:
                        message.sender === "user"
                          ? "primary.light"
                          : "secondary.light",
                      color: "text.primary",
                      p: 1.5,
                      borderRadius: "8px",
                      maxWidth: "300px",
                    }}
                  >
                    <Typography variant={"body1"}>{message.text}</Typography>
                  </Box>
                  <Typography variant={"caption"} sx={{ ml: 1 }}>
                    {formatTime(message.timestamp)}
                  </Typography>
                </Box>
                {message.sender === "user" && (
                  <Avatar
                    sx={{ bgcolor: "secondary.main", width: 32, height: 32 }}
                  >
                    U
                  </Avatar>
                )}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Área de entrada de mensagem */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ""}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </ModalContainer>
  );
};

// Componente principal que combina botão e modal
export const Chat: React.FC = () => {
  return (
    <>
      <ChatButton />
      <ChatModal />
    </>
  );
};
