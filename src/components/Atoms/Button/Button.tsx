import React from "react";
// import './button.css'
import Button from "@material-ui/core/Button";

export interface CustomButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  className?: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton: React.FC<CustomButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className,
  ...props
}) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <Button
      style={{ backgroundColor: backgroundColor }}
      variant="contained"
      color={mode}
      size={size}
      className={`${className}`}
      {...props}
    >
      {label}
    </Button>
  );
};
