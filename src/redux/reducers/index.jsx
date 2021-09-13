import { USER_UPDATE, USER_DELETE, LANG_UPDATE } from '../action-types';
import { combineReducers } from "redux";

const getState = localStorage.getItem("user");
const localSetState = { name: "", email: "", password: "" };
const userState = getState ? JSON.parse(getState) : localSetState;

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;

    case USER_DELETE:
      localStorage.removeItem("user");
      return localSetState;

    default:
      return state;
  }
}

const langState = document.documentElement.lang ? document.documentElement.lang : "en"

const langReducer = (state = langState, action) => {
  switch (action.type) {
    case LANG_UPDATE:
      return action.lang;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ userReducer, langReducer });

export default rootReducer;