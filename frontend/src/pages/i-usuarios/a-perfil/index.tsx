import { Avatar, Box, Paper, Typography } from "@mui/material";
import { useAuth } from "@/shared";
import { maskCPF, maskMobile, maskPhone, maskRG } from "@/shared/utils/mask";
import { Li } from "@/Components";

export const PerfilUser: React.FC = () => {
  const { state } = useAuth();
  const { user } = state;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* informações do usuario */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "95%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            padding: "10px 0",
            textTransform: "uppercase",
            wordSpacing: "2px",
            letterSpacing: "1px",
          }}
        >
          Informações do usuário
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.primary",
          }}
        >
          id
        </Typography>
        <Typography
          variant="h5"
          className="id"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.id || "id do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          Usuário:
        </Typography>
        <Typography
          variant="h5"
          className="login"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.login || "Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          nome:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.name || "Nome do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          className="name"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          nível:
        </Typography>
        <Typography
          variant="h5"
          className="accessLevel"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.accessLevel
            ? `Nível 0${user.accessLevel}`
            : "Nivel de acesso  do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          cargo:
        </Typography>
        <Typography
          variant="h5"
          className="role"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.role || "Cargo do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          data de criação:
        </Typography>
        <Typography
          variant="h5"
          className="creationDate"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {/* {user?.creationDate || "Data de Criação"} */}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          hora
        </Typography>
        <Typography
          variant="h5"
          className="hora"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {/* {user?.creationDate || "Data de Criação"} */}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          cpf:
        </Typography>
        <Typography
          variant="h5"
          className="cpf"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.cpf ? maskCPF(user.cpf) : "CPF do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          rg:
        </Typography>
        <Typography
          variant="h5"
          className="rg"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.rg ? maskRG(user.rg) : "RG do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          e-mail:
        </Typography>
        <Typography
          variant="h5"
          className="email"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.email || "Email do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          telefone:
        </Typography>
        <Typography
          variant="h5"
          className="phone"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.phone ? maskPhone(user.phone) : "Telefone do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          celular:
        </Typography>
        <Typography
          variant="h5"
          className="mobile"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.mobile ? maskMobile(user.mobile) : "Telefone do Usuario"}
        </Typography>
      </Box>

      {/* foto de perfil  */}
      <Box
        sx={{
          marginTop: "30px",
          width: "25%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid red ",
          position: "relative",
        }}
      >
        <Paper
          sx={{
            width: "280px ",
            height: "280px",
            bgcolor: "primary.main",
            position: "absolute",
            boxShadow: "4",
            borderRadius: "50%",
          }}
        />
        {/* Foto do usuario */}
        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            zIndex: "999",
            bgcolor: "primary.main",
          }}
        >
          <Avatar
            className="photo"
            src={user?.image || ""}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Paper>
      </Box>

      {/* informações do usuario */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "95%",
        }}
      >
        <Li>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              wordSpacing: "2px",
              letterSpacing: "1px",
              color: "text.primary",
            }}
          >
            id
          </Typography>
        </Li>

        <Typography
          variant="h5"
          className="id"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.id || "id do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          Usuário:
        </Typography>
        <Typography
          variant="h5"
          className="login"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.login || "Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          nome:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.name || "Nome do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          className="name"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          nível:
        </Typography>
        <Typography
          variant="h5"
          className="accessLevel"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.accessLevel
            ? `Nível 0${user.accessLevel}`
            : "Nivel de acesso  do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          cargo:
        </Typography>
        <Typography
          variant="h5"
          className="role"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.role || "Cargo do Usuário"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          data de criação:
        </Typography>
        <Typography
          variant="h5"
          className="creationDate"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {/* {user?.creationDate || "Data de Criação"} */}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          hora
        </Typography>
        <Typography
          variant="h5"
          className="hora"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {/* {user?.creationDate || "Data de Criação"} */}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          cpf:
        </Typography>
        <Typography
          variant="h5"
          className="cpf"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.cpf ? maskCPF(user.cpf) : "CPF do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          rg:
        </Typography>
        <Typography
          variant="h5"
          className="rg"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.rg ? maskRG(user.rg) : "RG do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          e-mail:
        </Typography>
        <Typography
          variant="h5"
          className="email"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.email || "Email do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          telefone:
        </Typography>
        <Typography
          variant="h5"
          className="phone"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.phone ? maskPhone(user.phone) : "Telefone do Usuario"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1px",
            wordSpacing: "3px",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          celular:
        </Typography>
        <Typography
          variant="h5"
          className="mobile"
          sx={{
            textTransform: "none",
            wordSpacing: "2px",
            letterSpacing: "1px",
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          {user?.mobile ? maskMobile(user.mobile) : "Telefone do Usuario"}
        </Typography>
      </Box>
    </Box>
  );
};
