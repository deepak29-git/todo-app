import { Action } from "../Dashboard/Dashboard.types";
import { initialState } from "./initialState";

export const reducerFun = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INPUT_TODO":
      return { ...state, todoInput: action.payload };
    case "INPUT_DESCRIPTION":
      return { ...state, todoDescription: action.payload };
    case "INPUT_DATE_TIME":
      return { ...state, todoDateAndTime: action.payload };
    default:
      return state;
  }
};
