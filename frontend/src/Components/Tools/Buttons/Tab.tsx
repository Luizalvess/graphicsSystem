import { styled, Tab } from "@mui/material";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

interface IListItemLinkProps {
  icon?: IconType;
  to?: string;
  onClick?: () => void;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon: Icon,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // Executa a função onClick passada como prop
    if (to) navigate(to); // Navega apenas se 'to' for fornecido
  };

  return (
    <StyledTab
      onClick={handleClick}
      icon={Icon && <Icon />} // Usando a prop 'icon' do Tab
    />
  );
};

const StyledTab = styled(Tab)(({ theme }) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.secondary,
  fontSize: "1.3rem",

  "&:hover": {
    transition: "0.6s",
    backgroundColor: theme.palette.primary.main, // Ajuste de cor para hover
  },

  "&:active": {
    boxShadow: theme.shadows[5],
    transition: "0.8s",
  },
}));

interface TabkProps {
  to?: string;
  icon?: IconType;
  onClick?: () => void;
}

export const TabButton: React.FC<TabkProps> = ({ to, icon, onClick }) => {
  return <ListItemLink to={to} icon={icon} onClick={onClick} />;
};
