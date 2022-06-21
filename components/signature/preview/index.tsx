import { arrayOf, node, object, oneOfType } from "prop-types";
import React, { useEffect, useRef } from "react";
import LOCATIONS from "../../../data/locations";
import { getRegionByCode } from "../../../utils/getRegion";
import { useSignatureState } from "../../context";
import Link from "../../elements/link";
import BrandName from "./brand";
import Marketing from "./marketing";
import Social from "./social";

const Spacer = () => (
  <div style={{ lineHeight: "12px", fontSize: "12px" }}>&nbsp;</div>
);

interface NormalTextProps {
  children: React.ReactNode;
  extraStyles?: any;
}

const NormalText = ({ children, extraStyles, ...rest }: NormalTextProps) => (
  <div
    style={{
      lineHeight: "18px",
      fontSize: "13px",
      color: "#000",
      fontFamily: "arial, sans-serif",
      ...extraStyles,
    }}
    {...rest}
  >
    {children}
  </div>
);

const Preview = () => {
  const { state, dispatch } = useSignatureState();
  const { name, jobTitle, pronouns } = state;
  const sigRef = useRef(null);
  const selectedOffice = LOCATIONS.find(
    (office) => office.name === state.office
  );
  const { websiteLocale } = getRegionByCode(state.region);
  useEffect(() => {
    dispatch({
      type: "UPDATE_SIGNATURE_ELEMENT",
      value: sigRef,
    });
  }, []);
  return (
    <div>
      <h2>Preview</h2>
      <hr />
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

        {state.telephoneNumbers.map((field, index) => {
          if (field.name || field.number) {
            return (
              <NormalText key={index} data-testid="additionalNumbers">
                {field.name}: {field.number}
              </NormalText>
            );
          }
        })}

        {state.includeOffice && (
          <>
            <NormalText data-testid="selectedOfficeNumber">
              Office: {selectedOffice.number}
            </NormalText>
          </>
        )}

        <Spacer />
        <BrandName />
        <Spacer />

        {state.region === "EU" && (
          <>
            <Social region={state.region} />
            <Spacer />
          </>
        )}

        {state.marketingLink === "awards" && (
          <>
            <Marketing />
            <Spacer />
          </>
        )}

        <div>
          <Link
            href={`https://www.kinandcarta.com/${websiteLocale}/careers/`}
            brandColor={true}
            bigger={true}
          >
            Explore open roles at Kin + Carta Europe
          </Link>
        </div>

        <Spacer />

        {state.region === "EU" && (
          <NormalText
            data-testid="signatureFooter"
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
    </div>
  );
};

NormalText.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  extraStyles: object,
};

export default Preview;
