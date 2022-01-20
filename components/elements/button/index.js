import { arrayOf, node, oneOfType } from "prop-types";
import { forwardRef } from "react";

const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button type="button" ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Button;
