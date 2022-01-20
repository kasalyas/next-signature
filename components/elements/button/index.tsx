import React, { forwardRef } from "react";
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button type="button" ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
