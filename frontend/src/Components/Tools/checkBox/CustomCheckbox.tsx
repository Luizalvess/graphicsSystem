import React from "react";
import { Checkbox, CheckboxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Estilizando o checkbox
const CustomCheckbox = styled((props: CheckboxProps) => (
  <Checkbox {...props} />
))(({ theme }) => ({
  color: "#1976d2",
  "&.Mui-checked": {
    color: "#4caf50",
  },
  "&:hover": {
    backgroundColor: "rgba(25, 118, 210, 0.08)",
  },
}));

export const CheckboxCustom: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <CustomCheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "customized checkbox" }}
      />
    </div>
  );
};
