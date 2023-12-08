import { CHANGE_SEARCH_FIELD } from "../actions";

// const initialState =  '';
const initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;