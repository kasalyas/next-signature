import React, { createContext, useContext, useReducer } from "react";
import signatureReducer, { State } from "./reducer";

export const useSignatureState = () => useContext(SignatureStateContext);

const SignatureStateContext = createContext(null);

/**
 * Initial state, this could just as easily come from an api
 */
const initialState: State = {
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
