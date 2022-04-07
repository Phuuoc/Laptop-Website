import { composeWithDevTools } from "redux-devtools-extension"
import {createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux';
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
});

let initialState={};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;