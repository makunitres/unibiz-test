import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
