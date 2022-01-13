type RegionTypes = "EU" | "US";

type Action = {
  type: string;
  field: string;
  value: string;
  name: string;
  index?: number;
  number?: string;
};

type State = {
  name: string;
  jobTitle: string;
  pronouns: string;
  region: RegionTypes;
  office: string;
  telephoneNumbers: [{}];
  includeOffice: boolean;
  marketingLink: string;
  signatureRef: null;
};

const signatureReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_DETAILS":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "ADD_TELEPHONE_NUMBER":
      return {
        ...state,
        telephoneNumbers: [...state.telephoneNumbers, { name: "", number: "" }],
      };
    case "UPDATE_TELEPHONE_NAME":
      const nameState = { ...state };
      nameState.telephoneNumbers[action.index] = {
        ...nameState.telephoneNumbers[action.index],
        name: action.name,
      };
      return nameState;
    case "UPDATE_TELEPHONE_NUMBER":
      const numberState = { ...state };
      numberState.telephoneNumbers[action.index] = {
        ...numberState.telephoneNumbers[action.index],
        number: action.number,
      };
      return numberState;
    case "DELETE_TELEPHONE_ROW":
      const filteredNumbers = state.telephoneNumbers.filter((number, index) => {
        if (index !== action.index) {
          return number;
        }
      });
      return { ...state, telephoneNumbers: [...filteredNumbers] };
    case "UPDATE_SIGNATURE_ELEMENT":
      return { ...state, signatureRef: action.value };
    default:
      return {
        ...state,
      };
  }
};

export default signatureReducer;
