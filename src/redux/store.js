import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { usersReducer } from "../components/Users/redux";
import { uiMessagesReducer } from "../components/Message/redux";

const rootReducer = combineReducers({
  users: usersReducer,
  ui: uiMessagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
