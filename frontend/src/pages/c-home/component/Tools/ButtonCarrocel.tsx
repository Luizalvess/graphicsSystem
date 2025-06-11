import { Button, Icon, styled } from "@mui/material";
import { IconType } from "react-icons/lib";

const StyledButton = styled(Button)(({ theme }) => ({
  // Adicione seu estilo personalizado aqui
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  width: "49%",
  height: "100%",
  boxShadow: "none",
  display: "flex",
  textAlign: "center",

  "&:hover": {
    transition: "1s",
    backgroundColor: theme.palette.primary.dark,
  },

  "&:active": {
    boxShadow: theme.shadows[4],
    transition: "1s",
  },
}));

const StyledListItemIcon = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(2),
  border: "",
  fontSize: "1.7rem",
  display: "flex",
  marginLeft: "15px",
}));

interface IListItemLinkProps {
  icon?: IconType;
  onClick?: () => void;
}

export const ButtonCarrocel: React.FC<IListItemLinkProps> = ({
  icon: Icon,
  onClick,
  ...buttonProps
}) => {
  return (
    <StyledButton {...buttonProps} onClick={onClick}>
      <StyledListItemIcon>
        <Icon />
      </StyledListItemIcon>
    </StyledButton>
  );
};
