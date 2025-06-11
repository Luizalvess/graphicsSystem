import { IconButton, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SxProps, Theme } from "@mui/system"; // Importando para usar o tipo do sx

interface IListItemLinkProps {
  to?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  children?: React.ReactNode; // Adiciona suporte a children
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  onClick,
  sx,
  children, // Recebe o children
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
      {children && <span>{children}</span>} {/* Exibe o children caso exista */}
    </StyledIconButton>
  );
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: "5px",
  width: "55px",
  height: "55px",
  fontSize: "1.5rem",
  borderRadius: "none",
  bgcolor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
  WebkitAppRegion: "no-drag",
  display: "flex", // Permite organizar ícone e children
  alignItems: "center",
  gap: "8px", // Espaço entre ícone e children
  padding: "8px",
  "&:hover": {
    transition: "0.6s",
    bgcolor: theme.palette.primary.dark,
  },
  "&:active": {
    boxShadow: theme.shadows[4],
    transition: "0.8s",
  },
}));

interface CalculatorButtonProps {
  to?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  children?: React.ReactNode; // Adiciona suporte a children
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  to,
  onClick,
  sx,
  children,
}) => {
  return (
    <ListItemLink to={to} onClick={onClick} sx={sx}>
      {children}
    </ListItemLink>
  );
};
