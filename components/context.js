import { createContext, useContext, useReducer } from "react";
import signatureReducer from "./reducer";

export const useSignatureState = () => useContext(SignatureStateContext);

const SignatureStateContext = createContext();

/**
 * We can use useEffect here to make a call to an endpoint and to get some
 * data back. For now this is hardcoded as initialState.
 */
const initialState = {
  name: "",
  jobTitle: "",
  pronouns: "",
  region: "EU",
  office: "",
  telephoneNumbers: [
    // {
    //   name: "Amsterdam",
    //   number: "999888777",
    // },
    // {
    //   name: "Saudi",
    //   number: "444444444",
    // },
  ],
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
