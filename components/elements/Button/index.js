import { forwardRef } from "react";

const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button type="button" ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;
