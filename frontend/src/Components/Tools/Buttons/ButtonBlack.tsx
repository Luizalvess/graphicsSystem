import { IconButton, styled } from "@mui/material";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { SxProps, Theme } from "@mui/system"; // Importando para usar o tipo do sx

interface IListItemLinkProps {
  icon: IconType;
  to?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>; // Adiciona a prop "sx" ao componente
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon: Icon,
  onClick,
  sx, // Recebe o "sx"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <StyledIconButton onClick={handleClick} sx={sx}>
      {" "}
      {/* Aplicar o sx */}
      <Icon />
    </StyledIconButton>
  );
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  // Adicione seu estilo personalizado aqui
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.secondary,
  fontSize: "1.3rem",
  WebkitAppRegion: "no-drag",

  "&:hover": {
    transition: "0.6s",
    backgroundColor: theme.palette.secondary.light,
  },

  "&:active": {
    boxShadow: theme.shadows[5],
    transition: "0.8s",
  },
}));

interface ButtonBlackProps {
  to?: string;
  icon: IconType;
  onClick?: () => void;
  sx?: SxProps<Theme>; // Adiciona a prop "sx" ao ButtonWhite
}

export const ButtonBlack = ({ to, icon, onClick, sx }: ButtonBlackProps) => {
  return <ListItemLink to={to} icon={icon} onClick={onClick} sx={sx} />;
};
