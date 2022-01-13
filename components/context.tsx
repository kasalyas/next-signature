import React, { createContext, useContext, useReducer } from "react";
import signatureReducer from "./reducer";

export const useSignatureState: React.FC = () =>
  useContext(SignatureStateContext);

const SignatureStateContext = createContext(null);

/**
 * Initial state, this could just as easily come from an api
 */
const initialState = {
  name: "",
  jobTitle: "",
  pronouns: "",
  region: "EU",
  office: "",
  telephoneNumbers: [],
  includeOffice: false,
  marketingLink: "none",
  signatureRef: null,
};

const SignatureState = ({ children }) => {
  const [state, dispatch] = useReducer(signatureReducer, initialState);
  return (
    <SignatureStateContext.Provider value={{ state, dispatch }}>
      {children}
    </SignatureStateContext.Provider>
  );
};

export default SignatureState;
