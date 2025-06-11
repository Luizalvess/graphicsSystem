import { Button, styled, ButtonProps } from "@mui/material";
import { IconType } from "react-icons/lib";

interface IListItemLinkProps extends Omit<ButtonProps, "type"> {
  // Ajustamos o tipo para evitar conflito com o `ButtonProps`
  icon?: IconType;
  to?: string;
  label?: string;
  type?: "button" | "submit" | "reset"; // Alinhado ao tipo esperado pelo HTML
  name?: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  label,
  to,
  icon: Icon,
  type = "button", // Tipo padrão
  name,
  ...buttonProps // Outras propriedades
}) => {
  return (
    <StyledButton {...buttonProps} type={type}>
      {" "}
      {/* Espalhando as props extras */}
      <Icon
        style={{
          marginRight: "20px",
          marginLeft: "-10px",
        }}
        name={name}
      />
      {label}
    </StyledButton>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  width: "150px",
  height: "35px",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  fontSize: "1.1rem",
  fontWeight: "700",
  letterSpacing: "1px",
  wordSpacing: "2px",
  textTransform: "uppercase",
  position: "absolute",
  left: "50%",
  bottom: "15px",
  right: "50",
  transform: "translateX(-50%)",
  bgcolor: "primary.contrastText",

  "&:hover": {
    transition: "0.6s",
    backgroundColor: theme.palette.primary.dark,
  },

  "&:active": {
    boxShadow: theme.shadows[4],
    transition: "0.8s",
  },
}));

interface IButtonIconProps extends IListItemLinkProps {}

export const CardButtonsWhite: React.FC<IButtonIconProps> = ({
  to,
  label,
  icon,
  type,
  name,
  ...buttonProps
}) => {
  return (
    <ListItemLink
      to={to}
      label={label}
      icon={icon}
      type={type}
      name={name}
      {...buttonProps}
    />
  );
};
