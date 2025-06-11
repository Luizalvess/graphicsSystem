import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

interface ButtonProps {
  to?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // <-- adicionado aqui
}

const ListItemLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      to,
      label,
      children,
      onClick,
      onKeyPress,
      type = "button",
      disabled = false,
    },
    ref
  ) => {
    const navigate = useNavigate();

    const handleClick = () => {
      if (disabled) return; // <-- impede ação se desabilitado
      if (onClick) onClick();
      if (to) navigate(to);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (event.key === "Enter") handleClick();
      if (onKeyPress) onKeyPress(event);
    };

    return (
      <StyledButton
        ref={ref}
        type={type}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        disabled={disabled} // <-- passado aqui
      >
        {children || label}
      </StyledButton>
    );
  }
);

const StyledButton = styled(Button)(({ theme }) => ({
  width: "180px",
  height: "50px",
  borderRadius: "25px",
  fontWeight: "700",
  fontSize: "1.5rem",
  backgroundColor: "#1d1d1d",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[8],
  letterSpacing: "3px",
  "&:hover": {
    transition: "0.6s",
    backgroundColor: "#272727",
    color: theme.palette.text.secondary,
  },
  "&:active": {
    boxShadow: theme.shadows[5],
    transition: "0.8s",
  },
  "&.Mui-disabled": {
    backgroundColor: "#888",
    color: "#ccc",
    cursor: "not-allowed",
  },
}));

ListItemLink.displayName = "ListItemLink";

export const LoginButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ to, label, children, onClick, onKeyPress, type, disabled }, ref) => {
    return (
      <ListItemLink
        ref={ref}
        to={to}
        label={label}
        children={children}
        onClick={onClick}
        onKeyPress={onKeyPress}
        type={type}
        disabled={disabled} // <-- propagado aqui também
      />
    );
  }
);

LoginButton.displayName = "LoginButton";
