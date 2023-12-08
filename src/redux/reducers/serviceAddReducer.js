import { CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS, FILL_SERVICE_FIELDS } from '../actions';


const initialState = {
  name: '',
  price: '',
  id: ''
};

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case CLEAR_SERVICE_FIELDS: 
      return initialState;

    case FILL_SERVICE_FIELDS: {
      const { name, price, id } = action.payload;
      return {...state, name, price, id};
    }
    default:
      return state;
  }
};

export default serviceAddReducer;