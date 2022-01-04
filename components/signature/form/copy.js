import Tippy from "@tippyjs/react";
import copy from "copy-to-clipboard";
import { forwardRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import { useSignatureState } from "../../context";
import Button from "../../elements/button";
import buttonStyles from "../../elements/button/button.module.css";

const CopyButton = forwardRef(
  ({ label, style, format, state, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    return (
      <Tippy content="Copied" visible={visible}>
        <Button
          type="button"
          className={style}
          ref={ref}
          onClick={() => {
            copy(state.signatureRef.current.outerHTML, {
              format,
            });
            setVisible(true);
            setTimeout(() => {
              setVisible(false);
            }, 1500);
          }}
          {...rest}
        >
          {label}
        </Button>
      </Tippy>
    );
  }
);

const CopyButtons = ({ state, name, title }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "50px",
        display: "flex",
        gap: "30px",
      }}
    >
      <CopyButton
        label="Copy signature for Gmail"
        style={buttonStyles.outline}
        format="text/html"
        disabled={name && title ? false : true}
        state={state}
      />
      <CopyButton
        label="Copy HTML"
        style={buttonStyles.dark}
        format="text/plain"
        disabled={name && title ? false : true}
        state={state}
      />
    </div>
  );
};

const Copy = () => {
  const { state } = useSignatureState();
  return <CopyButtons state={state} name={state.name} title={state.jobTitle} />;
};

export default Copy;
