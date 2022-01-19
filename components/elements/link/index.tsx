import React from "react";

interface LinkProps {
  children: React.ReactNode;
  bigger?: boolean;
  strong?: boolean;
  brandColor?: boolean;
}

const Link: React.FC<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, bigger, strong, brandColor, ...props }) => (
  <a
    style={{
      textDecoration: "underline",
      lineHeight: "18px",
      fontFamily: "arial, sans-serif",
      fontSize: bigger ? "13px" : "12px",
      color: brandColor ? "#7500ff" : "#000",
      fontWeight: strong ? "bold" : "normal",
    }}
    {...props}
  >
    {children}
  </a>
);

export default Link;
