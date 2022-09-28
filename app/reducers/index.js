import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReduser";
import reposAuthreducer from "./reposAuthreducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    repos2: reposAuthreducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
