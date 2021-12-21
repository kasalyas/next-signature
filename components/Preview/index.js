import LOCATIONS from "../../fixtures/locations";
import { useSignatureState } from "../context";
import Button from "../elements/Button";
import styles from "../elements/Button/Button.module.css";
import copy from "copy-to-clipboard";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { forwardRef, useRef, useState } from "react";

const Spacer = () => (
  <div style={{ lineHeight: "12px", fontSize: "12px" }}>&nbsp;</div>
);

const NormalText = ({ children, extraStyles }) => (
  <div
    style={{
      lineHeight: "18px",
      fontSize: "13px",
      color: "#000",
      fontFamily: "arial, sans-serif",
      ...extraStyles,
    }}
  >
    {children}
  </div>
);

const Link = ({ children, bigger, strong, brandColor, ...props }) => (
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

const CopyButton = forwardRef(
  ({ label, style, format, forwardedRef, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    return (
      <Tippy content="Copied" visible={visible}>
        <Button
          type="button"
          className={style}
          ref={ref}
          onClick={() => {
            copy(forwardedRef.current.outerHTML, {
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

const CopyButtons = ({ sigRef, name, title }) => {
  return (
    <div style={{ marginTop: "50px", display: "flex", gap: "30px" }}>
      <CopyButton
        label="Copy signature for Gmail"
        style={styles.outline}
        format="text/html"
        forwardedRef={sigRef}
        disabled={name && title ? false : true}
      />
      <CopyButton
        label="Copy HTML"
        style={styles.dark}
        format="text/plain"
        forwardedRef={sigRef}
        disabled={name && title ? false : true}
      />
    </div>
  );
};

const Preview = () => {
  const { state } = useSignatureState();
  const { name, jobTitle, pronouns } = state;
  const sigRef = useRef(null);
  const selectedOffice = LOCATIONS.find(
    (office) => office.name === state.office
  );

  return (
    <div>
      <div ref={sigRef}>
        <Spacer />
        <Spacer />
        {name ? (
          <NormalText extraStyles={{ fontWeight: "bold" }}>{name}</NormalText>
        ) : (
          <NormalText extraStyles={{ fontWeight: "bold" }}>
            Your Name
          </NormalText>
        )}

        {jobTitle ? (
          <NormalText>{jobTitle}</NormalText>
        ) : (
          <NormalText>Your Job Title</NormalText>
        )}

        {pronouns && (
          <NormalText extraStyles={{ fontSize: "11px" }}>{pronouns}</NormalText>
        )}

        <NormalText
          extraStyles={{
            color: "#ccc",
          }}
        >
          ––––––––––––––––––––––––
        </NormalText>

        <Spacer />

        {state.telephoneNumbers.map((field, index) => {
          if (field.name || field.number) {
            return (
              <NormalText key={index}>
                {field.name}: {field.number}
              </NormalText>
            );
          }
        })}

        {state.includeOffice && (
          <>
            <NormalText extraStyle={{ fontSize: "12px" }}>
              Office: {selectedOffice.number}
            </NormalText>
            <Spacer />
          </>
        )}

        <div
          style={{
            fontSize: "18px",
            lineHeight: "18px",
            color: "#000",
            display: "inline-block",
            fontFamily: "Josefin Sans",
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

        <Spacer />

        {state.region === "EU" && (
          <>
            <div>
              <Link href="https://www.kinandcarta.com/en/">Web</Link> ·{" "}
              <Link href="https://www.linkedin.com/company/kin-and-carta-europe/">
                LinkedIn
              </Link>{" "}
              · <Link href="https://twitter.com/kinandcarta_eu">Twitter</Link> ·{" "}
              <Link href="https://www.instagram.com/kinandcarta_eu/">
                Instagram
              </Link>{" "}
              ·{" "}
              <Link href="https://www.facebook.com/kinandcarta">Facebook</Link>
            </div>
            <Spacer />
          </>
        )}

        {state.marketingLink === "awards" && (
          <>
            <div>
              <Link
                href="https://bcorporation.net/directory/kin-and-carta-europe"
                strong={true}
                bigger={true}
              >
                B Corp certified
              </Link>{" "}
              |{" "}
              <Link
                href="https://www.kinandcarta.com/en/insights/2021/08/2021-fast-company-innovation-award/"
                strong={true}
                bigger={true}
              >
                Fast Company's Best Workplace for Innovators 2021
              </Link>
            </div>
            <Spacer />
          </>
        )}

        <div>
          <Link
            href="https://www.kinandcarta.com/en/careers/"
            brandColor={true}
            bigger={true}
          >
            Explore open roles at Kin + Carta Europe
          </Link>
        </div>

        <Spacer />

        {state.region === "EU" && (
          <NormalText
            extraStyles={{
              fontSize: "11px",
              color: "#666",
              maxWidth: "450px",
            }}
          >
            Kin and Carta PLC is a company registered in England and Wales.
            Registered number: ‍‍‍01552113. Registered office:
            The&nbsp;Spitfire&nbsp;Building,&nbsp;71&nbsp;Collier&nbsp;Street,&nbsp;London,&nbsp;N1&nbsp;9BE.
          </NormalText>
        )}
      </div>
      <CopyButtons sigRef={sigRef} name={state.name} title={state.jobTitle} />
    </div>
  );
};

export default Preview;
