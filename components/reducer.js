const signatureReducer = (state, action) => {
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
    default:
      return {
        ...state,
      };
  }
};

export default signatureReducer;
