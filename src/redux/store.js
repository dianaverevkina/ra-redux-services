import {
  combineReducers,
  compose,
  createStore
} from "redux";

import serviceAddReducer from "./reducers/serviceAddReducer";
import searchReducer from "./reducers/searchReducer";
import servicesReducer from "./reducers/reducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return createStore(
    combineReducers({
      services: servicesReducer,
      serviceAdd: serviceAddReducer,
      searchService: searchReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;