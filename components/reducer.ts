import { CheckboxTypes } from "./types";

type telephoneType = {
  name: string;
  number: string;
};

export type StateType = {
  name: string;
  jobTitle: string;
  pronouns: string;
  region: CheckboxTypes;
  office: string;
  telephoneNumbers: telephoneType[];
  includeOffice: boolean;
  marketingLink: string;
  // signatureRef: object;
};

type ActionType = {
  type:
    | "UPDATE_DETAILS"
    | "ADD_TELEPHONE_NUMBER"
    | "UPDATE_TELEPHONE_NAME"
    | "UPDATE_TELEPHONE_NUMBER"
    | "DELETE_TELEPHONE_ROW"
    | "UPDATE_SIGNATURE_ELEMENT";
  field: string;
  value: string | boolean;
  name: string;
  index: number;
  number: string;
};

function reducer(state: StateType, action: ActionType) {
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
      return {
        ...state,
        telephoneNumbers: [...filteredNumbers],
      };
    case "UPDATE_SIGNATURE_ELEMENT":
      return {
        ...state,
        signatureRef: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
