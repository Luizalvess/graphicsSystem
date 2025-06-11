import {
  Icon,
  ListItemButton,
  ListItemText,
  styled,
  SxProps,
  Theme,
} from "@mui/material";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  borderRadius: "15px",
  boxShadow: theme.shadows[1],
  textTransform: "uppercase",

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
  fontSize: "2em",
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
  letterSpacing: "5px",
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  wordBreak: "unset",
}));

interface IListItemLinkProps {
  label?: string;
  icon?: IconType;
  to?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>; // 🟢 Adicionado para aceitar sx
}

export const ButtonMedium: React.FC<IListItemLinkProps> = ({
  label,
  icon: Icon,
  onClick,
  to,
  sx,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledListItemButton onClick={handleClick} sx={sx}>
      <StyledListItemIcon>
        <Icon />
      </StyledListItemIcon>
      <StyledListItemText primary={label} />
    </StyledListItemButton>
  );
};
