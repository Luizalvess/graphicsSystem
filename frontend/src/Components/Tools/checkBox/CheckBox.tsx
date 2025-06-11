import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

interface ControlledCheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  borderRadius: 0, // Remove qualquer arredondamento
  marginRight: "-100px",
  width: "5px",
  height: "5px",
  color: theme.palette.primary.light,
  "&.Mui-checked": {
    width: "5px",
    height: "5px",
    color: theme.palette.success.main,
  },
  "&:hover": {
    backgroundColor: "rgba(0, 123, 255, 0.08)", // Efeito de hover azul claro
  },
  "&.Mui-disabled": {
    color: theme.palette.action.disabled,
  },
}));

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
