const BrandName = () => (
  <div
    data-testid="brandName"
    style={{
      fontSize: "18px",
      lineHeight: "18px",
      color: "#000",
      display: "inline-block",
      fontFamily: "Josefin Sans, arial, sans-serif",
      fontWeight: "bold",
    }}
  >
    KIN
    <span
      style={{
        fontSize: "18px",
        lineHeight: "18px",
        color: "#000",
        fontFamily: "arial, sans-serif",
        fontWeight: "normal",
        margin: "0 2px",
      }}
    >
      +
    </span>
    CARTA
  </div>
);

export default BrandName;
