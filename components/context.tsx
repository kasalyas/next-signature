import React, { createContext, useContext, useReducer } from "react";
import reducer, { StateType } from "./reducer";

export const useSignatureState = () => useContext(SignatureStateContext);

const initialState: StateType = {
  name: "",
  jobTitle: "",
  pronouns: "",
  region: "EU",
  office: "",
  telephoneNumbers: [],
  includeOffice: false,
  marketingLink: "none",
  // signatureRef: {current: ''},
};
const SignatureStateContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type SignatureProps = {
  children: React.ReactNode;
};

const GlobalState = ({ children }: SignatureProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SignatureStateContext.Provider value={{ state, dispatch }}>
      {children}
    </SignatureStateContext.Provider>
  );
};

export default GlobalState;
