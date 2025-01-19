import { Button, ButtonProps } from "@mui/material";

interface MyButtonProps extends ButtonProps {
  nodeId?: string;
  background?: string;
}

export const TextButton = (props: MyButtonProps): JSX.Element => (
  <Button
    sx={{
      padding: "10px 20px",
      fontSize: "14px",
      textWrap: "noWrap",
      textTransform: "none",
      height: "42px",
      "&:hover": {
        backgroundColor: "#F5F5FA",
      },
    }}
    variant="text"
    disableRipple
    {...props}
  />
);
