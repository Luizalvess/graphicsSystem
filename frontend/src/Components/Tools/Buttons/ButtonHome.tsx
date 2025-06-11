import { IconButton, styled } from "@mui/material";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

interface IListItemLinkProps {
  icon: IconType;
  to: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon: Icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledIconButton onClick={handleClick}>
      <Icon />
    </StyledIconButton>
  );
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "35px",
  height: "35px",
  fontSize: "1.5rem",
  position: "absolute",
  top: "2.5%",
  left: "2.3%",
  marginRight: "10px",
  bgcolor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
  WebkitAppRegion: "no-drag",
  "&:hover": {
    transition: "0.6s",
    bgcolor: theme.palette.primary.dark,
  },
  "&:active": {
    boxShadow: theme.shadows[4],
    transition: "0.8s",
  },
}));

interface ButtonHomeProps {
  to: string;
  icon: IconType;
}

export const ButtonHome = ({ to, icon }: ButtonHomeProps) => {
  return <ListItemLink to={to} icon={icon} />;
};
