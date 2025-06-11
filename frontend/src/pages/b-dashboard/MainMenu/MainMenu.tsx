import {
  Avatar,
  Box,
  Icon,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";

// icon
import {
  FaHandshake,
  FaClipboardList,
  FaCoins,
  FaBoxOpen,
  FaCartPlus,
  FaUserCog,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  // Adicione seu estilo personalizado aqui
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  width: "90%",
  height: "45px",
  maxHeight: "45px",
  borderRadius: "20px",
  boxShadow: theme.shadows[1],
  marginTop: "14px",

  "&:hover": {
    transition: "0.6s",
    backgroundColor: theme.palette.primary.dark,
  },

  "&:active": {
    boxShadow: theme.shadows[4],
    transition: "0.8s",
  },
  padding: theme.spacing(2),
}));

const StyledListItemIcon = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
  border: "",
  fontSize: "1.7rem",
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  // Adicione seu estilo personalizado aqui
  color: theme.palette.text.primary,
  letterSpacing: "5px",
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface IListItemLinkProps {
  label: string;
  icon: IconType;
  to: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  label,
  icon: Icon,
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledListItemButton onClick={handleClick}>
      <StyledListItemIcon>
        <Icon />
      </StyledListItemIcon>
      <StyledListItemText primary={label} />
    </StyledListItemButton>
  );
};

export const MainMenu = () => {
  const { state } = useAuth();
  const user = state?.user;

  // Fallback para as iniciais do nome, caso a imagem não esteja disponível
  const getUserInitials = () => {
    if (!user?.name) return "U";
    const [firstName = "", lastName = ""] = user.name.split(" ");
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <Box
      sx={{
        width: "19.5%",
        maxWidth: "280px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Foto do usuario */}
      <Box
        sx={{
          width: "100%",
          height: "37.5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              padding: "8px",
              width: "175px",
              height: "175px",
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "1",
            }}
          >
            <Avatar
              className="image"
              alt={user?.name || "Usuário"}
              src={user?.image}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                console.log("Image failed to load:", e.currentTarget.src);
                e.currentTarget.src = "";
              }}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              {getUserInitials()}
            </Avatar>
          </Stack>
        </Box>

        <Typography
          variant="h4"
          className="name"
          sx={{
            wordSpacing: "7px",
            fontWeight: "bold",
            color: "text.primary",
            marginBottom: "-5px",
          }}
        >
          {user?.name || "Nome do Usuário"}
        </Typography>
        <Typography
          className="role"
          variant="h5"
          sx={{
            wordSpacing: "2px",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "secondary.main",
          }}
        >
          {user?.role || "Função"}
        </Typography>
      </Box>

      {/* Painel de botoes  */}
      <Box
        className="painel-btn"
        sx={{
          width: "100%",
          height: "55%",
          display: "flex",
          alignItems: "center",
          paddingBottom: "35px",
          justifyContent: "center",
        }}
      >
        <List
          component="nav"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <ListItemLink label="CLIENTE" icon={FaHandshake} to="/cliente" />
          <ListItemLink label="O.S" icon={FaClipboardList} to="/os" />
          <ListItemLink label="VENDAS" icon={FaCartPlus} to="/vendas" />
          <ListItemLink label="FINANCEIRO" icon={FaCoins} to="/financeiro" />
          <ListItemLink label="PRODUTOS" icon={FaBoxOpen} to="/produtos" />
          <ListItemLink label="USUÁRIOS" icon={FaUserCog} to="/usuarios" />
        </List>
      </Box>
    </Box>
  );
};
