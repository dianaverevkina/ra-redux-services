import { ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from "../actions";
import {v4 as uuidv4} from 'uuid';


const initialState = [];

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [ ...state, {
          id: uuidv4(),
          name: action.payload.name,
          price: action.payload.price,
        }
      ];
    case EDIT_SERVICE: {
      const { name, price, id } = action.payload;
      const changeService = (el) => {
        if (el.id === id) {
          el.name = name;
          el.price = price;
        }
        return el;
      }
      return state.map(service => changeService(service));
    }
    case DELETE_SERVICE: {
      const { id } = action.payload;
      return state.filter(el => el.id !== id)
    }
    default:
      return state;
  }
};

export default servicesReducer;